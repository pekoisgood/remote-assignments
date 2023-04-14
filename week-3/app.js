const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

const router = require("./routes");
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("The server is listening on localhost:3000...")
);
