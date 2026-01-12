// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello from Node.js Server 🚀");
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// const fs = require("fs");

// console.log("Starting file read...");
// const data = fs.readFileSync("example.txt", "utf8");
// console.log("File content:", data);
// console.log("End of script.");

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (!success) {
      reject("Promise rejected due to an error.");
    } else {
      resolve("Promise resolved successfully!");
    }
  }, 2000);
});

mypromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


  