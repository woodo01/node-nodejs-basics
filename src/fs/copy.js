import fs from "fs";
import path from "node:path";

const copy = async () => {
    const oldFolderPath = path.join(import.meta.dirname + "/files");
    const newFolderPath = path.join(import.meta.dirname + "/copy_files");
    try {
        fs.mkdirSync(newFolderPath);
        fs.readdirSync(oldFolderPath).forEach((file) => {
            const oldFilePath = path.join(oldFolderPath + "/" + file);
            const newFilePath = path.join(newFolderPath + "/" + file);
            fs.copyFileSync(oldFilePath, newFilePath);
        });
    } catch (err) {
        throw Error("FS operation failed");
    }
};

await copy();
