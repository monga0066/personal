const { Router } = require('express');
const fs = require('fs')
const posts = Router();

posts.get("/", (req, res) => {
    const file = fs.readFileSync("./db.json", { encoding: "utf-8" })
    const postsData = JSON.parse(file);
    res.send(postsData.posts)
})


module.exports = posts

