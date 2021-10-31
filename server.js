const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/api");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static("./ClientApp/build/"));


//HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.get("/*", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname + "/ClientApp/build/",
  });
});

//For production purposes only
// switch (process.env.NODE_ENV) {
//   case "dev":
//     var PORT = process.env.DEV_PORT;
//     break;
//   case "prod":
//     var PORT = process.env.PROD_PORT;
//     break;
// }

var PORT = 3001;

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));

// Login information
var name = " ";
var id = 0;
var gameslist = " ";


// Friends information
var friendsname = " ";
var friendsid = 0;
var friendsgames = " ";

// Fetch Data
var getuserinfo = " ";
var getfriendsinfo = " ";
var returngames = " ";