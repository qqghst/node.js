const express = require("express");

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/templates/main.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/templates/about.html");
});
app.get("/user/:username/:id", (req, res) => {
	res.send(`User ID: ${req.params.id}. Username ${req.params.username}`);
});

app.listen(PORT, () => {
	console.log(`Server started at: ${HOST}:${PORT}`);
});
