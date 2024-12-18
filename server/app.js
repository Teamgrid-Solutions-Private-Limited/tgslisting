require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db =require("./config/dbConfig")

const PORT = 5050;
const app = express();




//---------------use part-----------
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).json({ message: "helo this is app page url cahceking!!!" });
});

db.connection.once("open", () => {
app.listen(PORT, () => {
  console.log(`Server up and down  at ${PORT}`);
})
})

//ggggg