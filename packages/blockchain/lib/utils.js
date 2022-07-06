import * as crypto from "crypto";
export function calcHash(index, previewHash, timestamp, data, nounce) {
    return crypto
        .createHash("sha256")
        .update(index + previewHash + timestamp + data + nounce)
        .digest("hex");
}
export function isMatchDifficulty(hash, difficulty, prefix = "0") {
    return hash.startsWith(new Array(difficulty).fill(prefix).join(""));
}
//# sourceMappingURL=utils.js.map