const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
const { wordsRouter } = require("./routes/words");
const { rankRouter } = require("./routes/rank");

app.use(express.json());
app.use(express.urlencoded());

// Words List End Point
app.use("/words", wordsRouter);
// Rank End Poin
app.use("/rank", rankRouter);

app.listen(PORT, (err) => {
  if (!err) return console.log("Server start at PORT", PORT);
  console.log(err);
});
