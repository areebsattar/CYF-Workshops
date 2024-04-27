import express from "express";
import words from "./data/wordList.json" assert {type: "json"};
import testWords from "./data/testWordList.json" assert {type: "json"};

const app = express();

app.get("/", (req, res) => {
    res.json(testWords);
})

app.listen("3000", () => {
    console.log("Listening on port 3000...");
})