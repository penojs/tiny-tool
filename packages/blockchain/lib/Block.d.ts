export default class Block {
    index: number;
    previewHash: string;
    timestamp: number;
    data: string;
    hash: string;
    nounce: number;
    constructor(index: number, previewHash: string, timestamp: number, data: string, hash: string, nounce: number);
    static get genesis(): Block;
}
