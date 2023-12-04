const http = require("http");
const fs = require("fs");

const PORT = 3000;
const HOST = "localhost";
// const HOST = '127.0.0.1';

let server = http.createServer((req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
	});

	if ((req.url === "/")) {
		//fs.readFile не подойдет, тк я работаю с сервером
		fs.createReadStream("./templates/main/index.html").pipe(res);
	} else if ((req.url === "/about")) {
		fs.createReadStream("./templates/about/index.html").pipe(res);
	} else {
        fs.createReadStream("./templates/error/index.html").pipe(res);
    }
});

server.listen(PORT, HOST, () => {
	console.log(`Сервер запущен: http://${HOST}:${PORT}`);
});
