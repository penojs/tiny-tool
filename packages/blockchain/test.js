import {calcHash} from './lib/utils.js'

let nounce = 0
let difficulty = 4
let isOk = false
let hash = ''

console.log('开始计算....')
let startTime = Date.now()
while (!isOk) {
  hash = calcHash(0, '0', 1657090837849, 'Hello Web3.0 World.', nounce)
  if(hash.startsWith(new Array(difficulty).fill('0').join(''))){
    isOk = true
  }else{
    nounce++
  }
}
console.log('计算完成', hash, 'nounce:', nounce)
console.log('用时：', Date.now() - startTime)
