const express = require('express')

const app = express()
app.use(express.json())
// const postsRouter = require('./Routes/posts.route.js')
// const usersRouter = require('./Routes/users.route.js')

// const loggerMiddleware = (req, res, next) => {
//     const reqTime = new Date().getTime()
//     // console.log(req)
//     next()
//     const resTime = new Date().getTime()
//     console.log(`Request Processing Time ${resTime - reqTime} ms`)
// }

// const apiMiddleware = (req, res, next) => {
//     // console.log(req.query.apiKey)
//     if (req.query.apiKey == 12345) {
//         next()

//     }
//     return res.status(401).send("No Api Key Found")
// }

// const methodMiddleware = (req, res, next) => {
//     console.log(req.method)
//     console.log(req.originalUrl)
//     console.log(req.headers["user-agent"])
//     next()
// }

const validationMiddleware = (req, res, next) => {

    if (req.body.id === undefined
        || req.body.name === undefined
        || req.body.rating === undefined
        || req.body.description === undefined
        || req.body.genre === undefined
        || req.body.cast === undefined
    ) {
        return res.send("Some Values Are Not Found")
    }



    if (typeof req.body.id === "number"
        && typeof req.body.name === "string"
        && typeof req.body.rating === "number"
        && typeof req.body.description === "string"
        && typeof req.body.genre === "string"
        && typeof req.body.cast === "object"
    ) {

        next()
    }
    else {

        res.status(400).send("Validation Failed")
    }

}

app.use(validationMiddleware)


app.get("/", (req, res) => {

    res.send("<h3>Welcome to home page</h3>")
})

// app.use("/posts", postsRouter)
// app.use("/users", usersRouter)
// 


app.listen(8000,()=>{
    console.log("rahul")
})