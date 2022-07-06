import Block from "./Block";
import { calcHash, isMatchDifficulty } from "./utils";
import { DIFFICULTY } from "./contants";

export default class BlockChain {
  chain: Array<Block>;
  difficulty: number;

  constructor() {
    this.chain = [Block.genesis];
    this.difficulty = DIFFICULTY;
  }

  store(data: string) {
    try {
      let block = this.generateNextBlock(data);
      this.addBlock(block);
    } catch (error) {
      throw error;
    }
  }

  generateNextBlock(data: string) {
    let lastBlock = this.lastBlock;
    let nextIndex = lastBlock.index + 1,
      previewHash = lastBlock.hash,
      timestamp = Date.now();

    let hash = "",
      isOk = false,
      nounce = 0;

    while (!isOk) {
      hash = calcHash(nextIndex, previewHash, timestamp, data, nounce);
      if (isMatchDifficulty(hash, this.difficulty)) {
        isOk = true;
      } else {
        nounce++;
      }
    }

    let nextBlock = new Block(
      nextIndex,
      previewHash,
      timestamp,
      data,
      hash,
      nounce
    );

    return nextBlock;
  }

  addBlock(block: Block) {
    this.chain.push(block);
  }

  get lastBlock() {
    return this.chain[this.chain.length - 1];
  }
}
