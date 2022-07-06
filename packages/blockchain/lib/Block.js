export default class Block {
    constructor(index, previewHash, timestamp, data, hash, nounce) {
        this.index = index;
        this.previewHash = previewHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.nounce = nounce;
    }
    // difficulty = 4
    static get genesis() {
        return new Block(0, "0", 1657090837849, "Hello Web3.0 World.", "00005670c6806808d01a5d91bdf9f5fadc567bcc197da15a9f70609e98cce495", 24369);
    }
}
//# sourceMappingURL=Block.js.map