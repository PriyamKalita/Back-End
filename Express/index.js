const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

app.use((req, res) => {
    // console.log(req);
    console.log("Request Received");
    res.send("This is a Basic Response");
})