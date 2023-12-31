const express = require("express");
const app = express();
const db = require("./db/cars");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.post("/cars", async (req, res) => {
    const results = await db.createCar(req.body);
    res.status(201).json({ id: results[0]});
});

app.get("/cars", async (req, res) => {
    const cars = await db.getAllCars();
    res.status(200).json({ cars });
});

app.get("/cars/:id", async (req, res) => {
    const car = await db.getCar(req.params.id);
    res.status(200).json({ car });
});
app.patch("/cars/:id", async (req, res) => {
    const id = await db.updateCar(req.params.id, req.body);
    req.status(200).json( { id });
});

app.delete("/cars/:id", async (req, res) => {
    await db.deleteCar(req.params.id);
    res.status(200).json({ success: true });
});
app.get("/test", (req, res) => {
    res.status(200).json({ success: true });
});

app.listen(1337, () => console.log("server is running on port 1337"));
