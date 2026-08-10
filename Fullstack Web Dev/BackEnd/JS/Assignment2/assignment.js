const path = require('path');
const fs = require('fs');
const os = require('os');
const EventEmitter = require('events');
const zlib = require('zlib');

// 1. Write a function that logs the current file path and directory. (0.5 Grade)
// Output Example: {File: "/home/user/project/index.js", Dir: "/home/user/project"}
{
    function logFileInfo() {
        console.log({ File: __filename, Dir: __dirname });
    }

    //  logFileInfo();
}



// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)
// Input Example: /user/files/report.pdf
// Output Example: "report.pdf"
{
    function getFileName(filePath) {
        return path.basename(filePath);
    }

    // console.log(getFileName("/user/files/report.pdf"));
}



// 3. Write a function that builds a path from an object (0.5 Grade)
// Input Example: { dir:"/folder", name:"app", ext:".js"}
// Output Example: "/folder/app.js"
{
    function buildPath(obj) {
        const p = path.format(obj);
        return path.normalize(p);
    }

    // console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
}



// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)
// Input Example: /docs/readme.md
// Output Example: ".md"
{
    function getExtension(filePath) {
        return path.extname(filePath);
    }

    // console.log(getExtension("/docs/readme.md"));
}



// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
// Input Example: /home/app/main.js
// Output Example: {Name: "main", Ext: ".js"}
{
    function parsePath(filePath) {
        const parsed = path.parse(filePath);
        return { Name: parsed.name, Ext: parsed.ext };
    }

    // console.log(parsePath("/home/app/main.js"));
}



// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
// Input Example: /home/user/file.txt
// Output Example: true
{
    function checkAbsolute(filePath) {
        return path.isAbsolute(filePath);
    }

    // console.log(checkAbsolute("/home/user/file.txt"));
}



// 7. Write a function that joins multiple segments (0.5 Grade)
// Input: "src", "components", "App.js"
// Output Example: src/components/App.js
{
    function joinSegments(...segments) {
        return path.join(...segments);
    }

    // console.log(joinSegments("src", "components", "App.js"));
}



// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// Input Example: ./index.js
// Output Example: /home/user/project/src/index.js
{
    function resolvePath(relativePath) {
        return path.resolve(relativePath);
    }

    // console.log(resolvePath("./index.js"));
}



// 9. Write a function that joins two paths. (0.5 Grade)
// Input Example: /folder1, folder2/file.txt
// Output Example: /folder1/folder2/file.txt
{
    function joinTwoPaths(path1, path2) {
        return path.join(path1, path2);
    }

    // console.log(joinTwoPaths("/folder1", "folder2/file.txt"));
}



// 10. Write a function that deletes a file asynchronously. (0.5 Grade)
// Input Example: /path/to/file.txt
// Output Example: The file.txt is deleted.
{
    function deleteFile(filePath) {
        fs.unlink(filePath, (err) => {
            if (err) {
                // console.log(err.message);
                return;
            }
            // console.log(`The ${path.basename(filePath)} is deleted.`);
        });
    }

    // deleteFile("./temp.txt");
}



// 11. Write a function that creates a folder synchronously. (0.5 Grade)
// Output Example: "Success"
{
    function createFolder(folderPath) {
        try {
            fs.mkdirSync(folderPath);
            return "Success";
        } catch (error) {
            return error.message;
        }
    }

    // console.log(createFolder("./newFolder2/newFolder3"));
}



// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// Output Example: Welcome event triggered!
{
    const emitter = new EventEmitter();

    emitter.on("start", () => {
        // console.log("Welcome event triggered!");
    });

    // emitter.emit("start");
}



// 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// Input Example: "Ahmed"
// Output Example: "User logged in: Ahmed"
{
    const emitter = new EventEmitter();

    emitter.on("login", (username) => {
        // console.log(`User logged in: ${username}`);
    });

    // emitter.emit("login", "Ahmed");
}



// 14. Read a file synchronously and log its contents. (0.5 Grade)
// Input Example: "./notes.txt"
// Output Example: the file content => "This is a note."
{
    function readFileSyncContent(filePath) {
        try {
            const content = fs.readFileSync(filePath, "utf8");
            // console.log(content);
            return content;
        }
        catch (error) {
            // console.log(error.message);
            return;
        }
    }

    // readFileSyncContent("./notes.txt");
}



// 15. Write asynchronously to a file. (0.5 Grade)
// Input: path: "./async.txt", content: "Async save"
{
    async function writeFileAsync(filePath, content) {
        try {
            await fs.promises.writeFile(filePath, content);
            // console.log("File written successfully");
        } catch (err) {
            // console.log(err.message);
        }
    }


    // writeFileAsync("./async.txt", "Async save");
}



// 16. Check if a directory exists. (0.5 Grade)
// Input Example: "./notes.txt"
// Output Example: true
{
    function checkExists(targetPath) {
        return fs.existsSync(targetPath);
    }

    // console.log(checkExists("./notes.txt"));
}



// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// Output Example: {Platform: "win32", Arch: "x64"}
{
    function getOsInfo() {
        return { Platform: os.platform(), Arch: os.arch() };
    }

    // console.log(getOsInfo());
}



// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// Input Example: "./big.txt"
// Output Example: log each chunk
{
    function readInChunks(filePath) {
        const readableStream = fs.createReadStream(filePath, { encoding: "utf8", highWaterMark: 16 });

        readableStream.on("data", (chunk) => {
            // console.log("Chunk:", chunk);
        });

        readableStream.on("end", () => {
            // console.log("Finished reading file.");
        });
    }

    // readInChunks("./big.txt");
}



// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// Input Example: "./source.txt", "./dest.txt"
// Output Example: File copied using streams
{
    function copyWithStreams(sourcePath, destPath) {
        const readableStream = fs.createReadStream(sourcePath);
        const writableStream = fs.createWriteStream(destPath);

        readableStream.pipe(writableStream);

        writableStream.on("finish", () => {
            // console.log("File copied using streams");
        });
    }

    //  copyWithStreams("./source.txt", "./dest.txt");
}



// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// Input Example: "./data.txt", "./data.txt.gz"
{
    const { pipeline } = require('stream');

    function compressFile(sourcePath, destPath) {
        const readableStream = fs.createReadStream(sourcePath);
        const gzip = zlib.createGzip();
        const writableStream = fs.createWriteStream(destPath);

        pipeline(readableStream, gzip, writableStream, (err) => {
            if (err) {
                // console.log(err.message);
                return;
            }
            // console.log("File compressed successfully");
        });
    }

    // compressFile("./data.txt", "./data.txt.gz");
}

//---------------------------------------------------------------------------PART 2---------------------------------------------------------------------------//

// 1)Create an API that adds a new user to your users stored in a JSON file.
const http = require("http");

    const app = http.createServer(async (req, res) => {
        const { method, url } = req;
        if (method === "POST" && url === "/user") {
            let userData = "";
            req.on("data", (chunk) => {
            userData += chunk;
        });
        req.on("end", async() => {
            const readStream = await fs.createReadStream("./users.json");
            let users = "";
            readStream.on("data", (chunk) => {
                users += chunk;
            });
            readStream.on("end",() => {
                users = JSON.parse(users);
                const userObj = JSON.parse(userData);
                const userExist = users.find((user) => user.email == userObj.email);
                if (userExist) {
                    res.writeHead(409);
                    return res.end("User already exists");
                }

                users.push(userObj);

                // save users in json file
                const writeStream = fs.createWriteStream("./users.json");
                writeStream.write(JSON.stringify(users), (error) => {
                if (!error) {
                    res.writeHead(201);
                    return res.end("User Created successfully");
                }
                res.writeHead(500);
                    return res.end("Something went wrong");
                });
            });
        });
    } 

// 2) Create an API that updates an existing user's name, age, or email by their ID.
    else if(url.startsWith('/user') && method === "PATCH"){
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            body = JSON.parse(body);

            let id = Number(url.split('/')[2]);

            fs.readFile('./users.json', {
                encoding: "utf-8"
            }, (err, data) => {

                if (err) {
                    res.writeHead(500, {
                        'content-type': 'application/json'
                    });

                    return res.end(JSON.stringify({
                        message: "Something went wrong",
                        success: false
                    }));
                }

                let users = JSON.parse(data);

                const userExist = users[id - 1];

                if(!userExist){
                    res.writeHead(404, {
                        'content-type': 'application/json'
                    });

                    res.write(JSON.stringify({
                        message: "user ID not found",
                        success: false
                    }));

                    res.end();
                    return;
                }

                if (body.name) {
                    userExist.name = body.name;
                }   

                if (body.age) {
                    userExist.age = body.age;
                }

                if (body.email) {
                    userExist.email = body.email;
                }

                fs.writeFile(
                    './users.json',
                    JSON.stringify(users, null, 2),
                    (err) => {

                        if (err) {
                            res.writeHead(500, {
                                'content-type': 'application/json'
                            });

                            return res.end(JSON.stringify({
                                message: "Something went wrong",
                                success: false
                            }));
                        }

                        res.writeHead(200, {
                            'content-type': 'application/json'
                        });

                        res.write(JSON.stringify({
                            message: "User updated successfully.",
                            success: true
                        }));

                        res.end();
                    });
                });
            });
        }

//3) Create an API that deletes a User by ID. 
    else if(url.startsWith('/user') && method === "DELETE"){

        let id = Number(url.split('/')[2]);

        fs.readFile('./users.json', {
            encoding: "utf-8"
        }, (err, data) => {

        if(err){
                res.writeHead(500, {
                    'content-type': 'application/json'
                });

                return res.end(JSON.stringify({
                    message: "Something went wrong",
                    success: false
                }));
        }

        let users = JSON.parse(data);

        const userExist = users[id - 1];

        if(!userExist){
            res.writeHead(404, {
                'content-type': 'application/json'
            });

            res.write(JSON.stringify({
                message: "user ID not found",
                success: false
            }));

            res.end();
            return;
        }
        users.splice(id - 1, 1);
        fs.writeFile(
            './users.json',
            JSON.stringify(users, null, 2),
            (err) => {

                if(err){
                    res.writeHead(500, {
                        'content-type': 'application/json'
                    });

                    return res.end(JSON.stringify({
                        message: "Something went wrong",
                        success: false
                    }));
                }

                res.writeHead(200, {
                    'content-type': 'application/json'
                });

                res.write(JSON.stringify({
                    message: "User deleted successfully.",
                    success: true
                }));

                res.end();
            });
        });
    }

//4) Create an API that gets all users from the JSON file. 
    else if (url === '/user' && method === "GET") {

        fs.readFile('./users.json', {
            encoding: "utf-8"
        }, (err, data) => {

            if (err) {
                res.writeHead(500, {
                    'content-type': 'application/json'
                });

                return res.end(JSON.stringify({
                    message: "Something went wrong",
                    success: false
                }));
            }

            const users = JSON.parse(data);

            res.writeHead(200, {
                'content-type': 'application/json'
            });

            res.write(JSON.stringify({
                message: "Users fetched successfully",
                success: true,
                users: users
            }));

            res.end();
        });
    }

//5) Create an API that gets User by ID.
    else if (url.startsWith('/user/') && method === "GET") {

        let id = Number(url.split('/')[2]);

        fs.readFile('./users.json', {
            encoding: "utf-8"
        }, (err, data) => {

            if (err) {
                res.writeHead(500, {
                    'content-type': 'application/json'
                });

                return res.end(JSON.stringify({
                    message: "Something went wrong",
                    success: false
                }));
            }

            const users = JSON.parse(data);

            const userExist = users[id - 1];

            if (!userExist) {
                res.writeHead(404, {
                    'content-type': 'application/json'
                });

                return res.end(JSON.stringify({
                    message: "user ID not found",
                    success: false
                }));
            }

            res.writeHead(200, {
                'content-type': 'application/json'
            });

            res.write(JSON.stringify({
                user: userExist
            }));

            res.end();
        });
    }
});


const port = 3000;

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
});

// Postman Collection Link: https://documenter.getpostman.com/view/38377101/2sBY4VLdDL#142b0527-50d0-431a-b723-e6b267a4fc3f