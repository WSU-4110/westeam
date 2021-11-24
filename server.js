const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/api");
const cors = require('cors')
const request = require('request-promise');
const { info } = require("console");
const GamesLists = import("./ClientApp/src/components/GamesLists.js");

//GamesLists.getGamesList

//Get steam API key from .env file
//DO NOT EXPOSE API KEY TO GITHUB
//.ENV FILE AND API KEY SHOULD ALWAYS BE SECRET
require("dotenv").config();
const STEAM_API_KEY = process.env.STEAM_API_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(express.static("./ClientApp/build/"));


//HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);


app.get("/friends/:steamID", (req, res) => {
  console.log("Getting friends list of " + req.params.steamID + "...");
  let STEAM_ID = req.params.steamID;

  //get friends list. then iterate through each friend and compile a name and profile image
  //Replace the API key with the variable STEAM_API_KEY to keep keys secret

  let FRIENDS_LIST_RESPONSE = [];

  request('https://api.steampowered.com/ISteamUser/GetFriendList/v1/?key=' + STEAM_API_KEY + '&steamid=' + STEAM_ID)
    .then(function (fListBody) {
      return JSON.parse(fListBody).friendslist.friends
    })
    .then(function (fListBody) {

      Promise.all(fListBody.map(element => {
        return request('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=' + STEAM_API_KEY + '&steamids=' + element.steamid);
      })).then(results => {

        results.forEach(e => {
          FRIENDS_LIST_RESPONSE.push(JSON.parse(e).response.players);
        });

      }).then(() => {
        res.send(FRIENDS_LIST_RESPONSE);

      }).catch(err => {
        console.log(err);

      });

    })
    .catch(function (err) {
      console.log("GetFriendList v1 API Fetch has failed :(")
      console.log(err)
    });

})

//GamesLists

//Default route, always keep this at the bottom
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

/*
// Friends information
var friendsname = " ";
var friendsid = 0;
var friendsgames = " ";

// Fetch Data
var getuserinfo = " ";
var getfriendsinfo = " ";
var returngames = " ";
*/