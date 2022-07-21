const hash = require('hash.js');

module.exports = class Block {
    constructor(
        blockDataHash,
        blockHash,
        difficulty,
        index,
        nonce,
        prevBlockHash,
        timestamp,
        tx
    ) {
        this.blockDataHash = blockDataHash;
        this.difficulty = difficulty;
        this.index = index;
        this.prevBlockHash = prevBlockHash;
        this.tx = tx;
        
        if (this.blockDataHash === undefined) this.calculateBlockDataHash();
        
        this.blockHash = blockHash;
        this.nonce = nonce;
        this.timestamp = timestamp;

        if (this.blockHash === undefined) this.calculateBlockHash();
    }

    calculateBlockDataHash() {
        let data = {
            'index': this.index,
            'difficulty': this.difficulty,
            'prevBlockHash': this.prevBlockHash,
            'tx': this.tx.map(t => Object({
                'amount': t.amount,
                'fee': t.fee,
                'hash': t.hash,
                'recipient': t.recipient,
                'sender': t.sender,
                'timestamp': t.timestamp
            }))
        };

        let dataJSON = JSON.stringify(data);
        this.blockDataHash = sha256(dataJSON);
    }

    calculateBlockHash() {
        let data = `${this.blockDataHash}|${this.timestamp}|${this.nonce}`;
        this.blockHash = sha256(data);
    }

    // using the hash.js library for sha256 hashing
    sha256(data) {
        return hash.sha256().update(data).digest('hex');
    }
};