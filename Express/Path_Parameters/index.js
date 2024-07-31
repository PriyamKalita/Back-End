const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  app.get("/", (req, res) => {
    res.send("Hello, I am Root");
  })

app.get("/:username/:id", (req, res) => {
    let{username, id} = req.params;
    let htmlStr = `<h1>Welcome to the Page of @${username}.</h1>`;
    res.send(htmlStr);

});

// Query Strings
app.get("/search", (req, res) => {
    let { q } = req.query;

    if(!q){
        res.send("<h1>Nothing Searched</h1>");
    }

    res.send(`<h1>Search Results for Query : ${q}</h1>`);
});


