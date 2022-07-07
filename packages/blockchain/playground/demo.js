require("@babel/register")({
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],
});
const fs = require("fs/promises");
const path = require("path");
const { calcHash, isValidChain } = require("../dist/utils");
const BlockChain = require("../dist/BlockChain").default;

let nounce = 0;
let difficulty = 4;
let isOk = false;
let hash = "";

console.log("开始计算....");
let startTime = Date.now();
while (!isOk) {
  hash = calcHash(0, "0", 1657090837849, "Hello Web3.0 World.", nounce);
  if (hash.startsWith(new Array(difficulty).fill("0").join(""))) {
    isOk = true;
  } else {
    nounce++;
  }
}
console.log("计算完成", hash, "nounce:", nounce);
console.log("用时：", Date.now() - startTime);

const localChain = new BlockChain();
localChain.store("1");
localChain.store("2");
localChain.store("3");

console.log( isValidChain(localChain) ? 'is valid chain.' : 'is not valid chain.')

fs.writeFile(
  path.resolve(__dirname, "./localChain.json"),
  JSON.stringify(localChain.toArray(), null, 2)
).then(() => {
  console.log("is ok.");
});
