import Block from './Block';
import { calcHash, isMatchDifficulty } from './utils';
export default class BlockChain {
    constructor() {
        this.chain = [Block.genesis];
        this.difficulty = 4;
    }
    store(data) {
        try {
            let block = this.generateNextBlock(data);
            this.addBlock(block);
        }
        catch (error) {
            throw error;
        }
    }
    generateNextBlock(data) {
        let lastBlock = this.lastBlock;
        let nextIndex = lastBlock.index + 1, previewHash = lastBlock.hash, timestamp = Date.now();
        let hash = '', isOk = false, nounce = 0;
        while (!isOk) {
            hash = calcHash(nextIndex, previewHash, timestamp, data, nounce);
            if (isMatchDifficulty(hash, this.difficulty)) {
                isOk = true;
            }
            else {
                nounce++;
            }
        }
        let nextBlock = new Block(nextIndex, previewHash, timestamp, data, hash, nounce);
        return nextBlock;
    }
    addBlock(block) {
        this.chain.push(block);
    }
    get lastBlock() {
        return this.chain[this.chain.length - 1];
    }
}
//# sourceMappingURL=BlockChain.js.map