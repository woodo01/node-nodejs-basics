import fs from "node:fs";
import path from "node:path";

const read = async () => {
    fs.createReadStream(path.join(import.meta.dirname + "/files/fileToRead.txt"))
        .on("data", (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();
