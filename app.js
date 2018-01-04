require("express")()
    .get("/", (req, res, next) => {
        var d = new Date()
        console.log(`Request received at ${d.toUTCString()}`);
        res.send("Welcome To Node-Example II")
    })
    .listen(3000)
