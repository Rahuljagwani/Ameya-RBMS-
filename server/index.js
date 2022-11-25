const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const { application } = require("express");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pass1869#",
    database: "rivers"

});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

/*Safe Api*/
app.get("/api/listSafe", (req, res) => {
    const safe = `Select rivername from riverlist where Category=1`;
    db.query(safe, (err, result) => {
        res.send(result);
    })
});

/*Unsafe Api*/
app.get("/api/listUnsafe", (req, res) => {
    const unsafe = `Select rivername from riverlist where Category=0`;
    db.query(unsafe, (err, result) => {
        res.send(result);
    })
});

/*Wholelist api*/
app.get("/api/listFull", (req, res) => {
    const rlist = `Select rivername,Category from riverlist`;
    db.query(rlist, (err, result) => {
        res.send(result);
    })
});

/*To be tested*/
app.get("/api/toTest", (req, res) => {
    const tlist = `Select rivername from tobetested`;
    db.query(tlist, (err, result) => {
        res.send(result);
    })
});

/*Going to tobetested*/

app.post("/api/insTest", (req, res) => {
    var WBName = "Kuch BHi";
    WBName = req.body.wbName;
    const insTest = `Insert into tobetested values ("${WBName}");`;
    db.query(insTest, (err, result) => {
        if (err == null)
        res.send("Success");
    else
        res.send(err.sqlMessage);
        console.log(err);
    })
});

/*Going to riverlist*/
var TWBName = "Kuch BHi";
var WBCategory=0;
app.post("/api/insRlist", (req, res) => {
    TWBName = req.body.wbName;
    WBCategory=req.body.wbCat;
    console.log(WBCategory);
    const insRlist = `Insert into riverlist values("${TWBName}",${WBCategory});`;
    db.query(insRlist, (err, result) => {
        if (err == null)
        res.send("Success");
    else
        res.send(err.sqlMessage);
        console.log(err);
    })
});


app.listen(3001, () => {
    console.log("running on port 3001");
})