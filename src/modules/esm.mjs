import path from "path";
import {release, version} from "os";
import {createServer as createServerHttp} from "http";
import {fileURLToPath} from "url";
import jsonA from "./files/a.json" with {type: "json"};
import jsonB from "./files/b.json" with {type: "json"};
import "./files/c.js";

const random = Math.random();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

let unknownObject = random > 0.5 ? jsonA : jsonB;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export {unknownObject, myServer};
