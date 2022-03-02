import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from './dbCards.js';
//app config
const app = express();
const connection_url = "mongodb+srv://Yash:kYSK_000_@cluster0.eg96v.mongodb.net/tinderdb?retryWrites=true&w=majority";
//middlewares
app.use(express.json());
app.use(Cors());
//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//api endpoints


app.get("/", (req, res) => res.status(200).send("welcome!!"));

app.post("/tinder/card", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get("/tinder/card", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

//listener
app.listen(5000, (req, res) => {
    console.log('app is running');
})