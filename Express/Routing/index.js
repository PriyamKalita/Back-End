const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

app.get("/", (req, res) => {
    res.send("Hello, I am Root Path");

});

app.get("/apple", (req, res) => {
    res.send("You conected APPLE Path");

});

app.get("/orange", (req, res) => {
    res.send("You conected ORANGE Path");

});

app.get("*", (req, res) => {
    res.send("This Path Does not Exit");
});

app.post("/", (req, res) => {
    res.send("This is a POST request");
});
