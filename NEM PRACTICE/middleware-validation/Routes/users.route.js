const { Router } = require('express')


const users = Router()
const fs = require('fs')


users.get('/', (req, res) => {
    const file = fs.readFileSync("./db.json", { encoding: 'utf8' })
    const parseUsers = JSON.parse(file);
    res.send(parseUsers.users)
})

users.post("/adduser", (req, res) => {
    res.send("Recived")
})

module.exports = users;