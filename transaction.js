const hash = require('hash.js');

module.exports = class Transaction {
    constructor(amount, fee, hash, recipient, sender, timestamp) {
        this.amount = amount;
        this.fee = fee;
        this.hash = hash;
        this.recipient = recipient;
        this.sender = sender;
        this.timestamp = timestamp;
        
        if (this.hash === undefined) this.calculateHash();
    }

    calculateHash() {
        let txData = {
            'amount': this.amount,
            'fee': this.fee,
            'recipient': this.recipient,
            'sender': this.sender,
            'timestamp': this.timestamp
        }

        let txDataJSON = JSON.stringify(txData);
        this.hash = sha256(txDataJSON);
    }
    // using the hash.js library for sha256 hashing
    sha256(data) {
        return hash.sha256().update(data).digest('hex');
    }

}