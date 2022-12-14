const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const fs = require("fs");

const app = express();

app.use(json());

app.use(express.urlencoded({ extended: false }))

app.use("/", routes);

app.get('./models/Flight.js',(req, res)=>{
  return res.json({ flights })
})

app.post

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
