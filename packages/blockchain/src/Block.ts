export default class Block {

  index: number
  previewHash: string
  timestamp: number
  data: string
  hash: string
  nounce: number

  constructor(
    index: number,
    previewHash: string,
    timestamp: number,
    data: string,
    hash: string,
    nounce: number
  ) {
    this.index = index;
    this.previewHash = previewHash;
    this.timestamp = timestamp;
    this.data = data;  // data 一般是 Merkle Tree
    this.hash = hash;
    this.nounce = nounce;
  }

  toJson(){
    return {
      index: this.index,
      previewHash: this.previewHash,
      timestamp: this.timestamp,
      data: this.data,
      hash: this.hash,
      nounce: this.nounce
    }
  }

  // difficulty = 4
  static get genesis(): Block {
    return new Block(
      0,
      "0",
      1657090837849,
      "Hello Web3.0 World.",
      "00005670c6806808d01a5d91bdf9f5fadc567bcc197da15a9f70609e98cce495",
      24369
    );
  }
}
