const initialUrl = process.env.NODE_1; // write other nodes into blockchain
import Transaction from './transaction';
import Block from './block';
// import validation file

class Blockchain {
    constructor() {
        this.chain = [/* genesis block */];
        this.difficulty = '';
        this.nodes = [];
        this.pending_transactions = [];
    }
}