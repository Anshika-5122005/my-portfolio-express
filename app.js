const express = require("express");
const app = express();

// Elastic Beanstalk ke liye process.env.PORT use karo
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/skills", (req, res) => {
    res.sendFile(__dirname + "/pages/my_skills.html");
});

app.listen(port, (err) => {
    if (err) {
        console.error("Server failed to start:", err);
    } else {
        console.log("Server started on port " + port);
    }
});
