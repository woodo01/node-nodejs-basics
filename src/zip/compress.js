import zlib from "node:zlib";
import path from "node:path";
import fs from "node:fs";

const compress = async () => {
    const filePath = path.join(import.meta.dirname + "/files/fileToCompress.txt");
    const outputPath = path.join(import.meta.dirname + "/files/archive.gz");
    const gzip = zlib.createGzip();

    fs.createReadStream(filePath).pipe(gzip).pipe(fs.createWriteStream(outputPath));
};

await compress();
