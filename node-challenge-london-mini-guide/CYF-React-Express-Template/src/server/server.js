import express from "express";
import fs from "fs";

const app = express();

const routes = {
  "/Stratford/pharmacies": "Returns the pharmacies in Stratford",
};

app.get("/", (req, res) => {
  res.json(routes);
});

const readData = (city) => {
  const filePath = `/home/areebsattar/CYF/CYF-Workshops/node-challenge-london-mini-guide/data/${city}.json`;
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

app.get("/:city/:category", (req, res) => {
  const city = req.params.city;
  const category = req.params.category;

  const data = readData(city);
  res.json(data[category]);
});


app.listen(3010, () => {
  console.log("Listening on port 3010");
});
