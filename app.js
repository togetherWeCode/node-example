require("express")()
    .get("/", (req, res, next) => {
        res.send("Welcome To Node-Example II")
    })
    .listen(3000)