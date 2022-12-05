const express = require("express");
var cors = require("cors");
var app = express();
var path = require("path");
const port = 3000;

// Without middleware
const corsOptions = {
  origin: "*",
  accessControlAllowMethods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", function (req, res) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "./videos/testvid.mpd";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
