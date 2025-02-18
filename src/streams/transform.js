import {Transform} from "node:stream";

const transform = async () => {
    process.stdin.pipe(new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split("").reverse().join("") + "\n");
            callback();
        },
    })).pipe(process.stdout);
};

await transform();
