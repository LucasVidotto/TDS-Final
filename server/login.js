const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crudSave",
  });

app.use(express.json());
app.use(cors());

app.get("/getCards", (req, res) => {
    let mysql = "SELECT * FROM logins";
    db.query(mysql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3050, () => {
    console.log("rodando na porta 3050");
});