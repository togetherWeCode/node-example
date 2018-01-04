require("express")()
    .get("/", (req, res, next) => {
        res.send("Welcome To Node-Example")
    })
    .listen(3000)