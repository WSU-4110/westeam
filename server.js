const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/api");
const cors = require('cors')
const request = require('request-promise');
const { info } = require("console");


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
  console.log(req.params.steamID);
  let STEAM_ID = req.params.steamID;
  //get friends list. then iterate through each friend and compile a name and profile image
  //Replace the API key with the variable STEAM_API_KEY to keep keys secret

  var FRIENDS_LIST_RESPONSE = [];

  request('https://api.steampowered.com/ISteamUser/GetFriendList/v1/?key=' + STEAM_API_KEY + '&steamid=' + STEAM_ID, function (error, response, fListBody) {
    if (!error && response.statusCode == 200) {

      let FRIENDS_LIST = JSON.parse(fListBody).friendslist.friends;
      // res.send(fListBody);

      // unnest these loops

      FRIENDS_LIST.forEach(element => {
        let thisID = element.steamid;
        // console.log(thisID);

        request('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=' + STEAM_API_KEY + '&steamids=' + thisID, function (error, response, infoBody) {
          if (!error && response.statusCode == 200) {

            let playerInfo = JSON.parse(infoBody);
            // console.log(JSON.parse(infoBody).response.players[0].avatar);

            let name = playerInfo.response.players[0].personaname;
            //can use avatarmedium or avatarfull here for avatar size
            let avatar = playerInfo.response.players[0].avatar;

            var entry = {
              "steamid": element.steamid,
              "relationship": element.relationship,
              "friend_since": element.friend_since,
              "name": name,
              "avatar": avatar
            };

            return entry;
            //THIS CONSOLE LOG ENTRY SHOW EVERYTHING POPULATED FOR THAT ENTRY
            // console.log(entry);
            // FRIENDS_LIST_RESPONSE.push(entry);

          }
        }).then((entry) => {
          FRIENDS_LIST_RESPONSE.push(entry);
        })
      });
    }
  }).then((i) => {
    console.log("thennnnnn2");
    res.send(FRIENDS_LIST_RESPONSE)
  });

})



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
