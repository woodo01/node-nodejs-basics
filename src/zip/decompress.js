import zlib from "node:zlib";
import path from "node:path";
import fs from "node:fs";

const decompress = async () => {
    const readStream = fs.createReadStream(path.join(import.meta.dirname + "/files/archive.gz"));
    const writeStream = fs.createWriteStream(path.join(import.meta.dirname + "/files/fileToCompress.txt",));
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
