const express = require("express");
const app = express();
const port = 3000;

app.get("/api/fibonacci/:n", (req, res) => {
    res.send("hello")
});

app.listen(port, () => {
    console.log(`server démarré sur le port ${port}`)
});