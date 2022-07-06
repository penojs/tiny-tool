import Block from './Block';
export default class BlockChain {
    chain: Array<Block>;
    difficulty: number;
    constructor();
    store(data: string): void;
    generateNextBlock(data: string): Block;
    addBlock(block: Block): void;
    get lastBlock(): Block;
}
