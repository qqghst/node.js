const express = require("express");

const app = express();
const PORT = 3001;
// const HOST = localhost;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.get("/api/test", (req, res) => {
	res.json({
		message: "hello sworld!",
		array: ["first", "second", "third"],
		title1: "this is a catchy title",
		title2: "all the fun below",
	});
});

app.listen(PORT, () => {
	console.log(`Server started at: ${PORT}`);
});
