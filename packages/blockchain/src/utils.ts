import * as crypto from "crypto";
import Block from "./Block";
import type { default as BlockChain } from "./BlockChain";

export function calcHash(
  index: number,
  previewHash: string,
  timestamp: number,
  data: string,
  nounce: number
): string {
  return crypto
    .createHash("sha256")
    .update(index + previewHash + timestamp + data + nounce)
    .digest("hex");
}

export function isMatchDifficulty(
  hash: string,
  difficulty: number,
  prefix = "0"
) {
  return hash.startsWith(new Array(difficulty).fill(prefix).join(""));
}

export function isValidChain(blockChain: BlockChain) {
  if (blockChain.chain.length < 1) return false;

  const chain = blockChain.chain;
  const difficulty = blockChain.difficulty
  if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis)) {
    return false;
  }

  let previewBlock = chain[0]
  for(let i=1; i<chain.length; i++){
    const { index, timestamp, data, nounce, previewHash, hash } = chain[i]
    if(previewBlock.hash !== previewHash){
      return false
    }
    if(!isMatchDifficulty(hash, difficulty)) return false
    if(hash !== calcHash(index, previewBlock.hash, timestamp, data, nounce)) return false
  }

  return true
}
