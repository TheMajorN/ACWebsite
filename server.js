const express = require("express");
const path = require("path");

const app = express();

console.log("Parameters established...")

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
console.log("Path resolved...")

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
console.log("Files initialized...")

app.listen(process.env.PORT || 5080, () => console.log("System is running!"));