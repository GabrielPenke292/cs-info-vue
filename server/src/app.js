console.log("Hello World!");
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
    res.send({
        message: "Hello World!"
    });
});

app.post("/register", (req, res) => {
    res.send({
        message: `Usuário ${req.body.email} registrado com sucesso!`
    });
});

app.listen(process.env.PORT || 8081);
