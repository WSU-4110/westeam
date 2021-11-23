const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/api");
const cors = require('cors')
const request = require('request-promise');
const { info } = require("console");
const { parse } = require("path/posix");


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


//test id 76561198028109433-76561199182670143-76561198170048678
app.get("/output/:steamID", (req, res) => {
  //get the data from the url request
  console.log("Getting Common Games of " + req.params.steamID + "...");
  let urlParamReq = req.params.steamID;

  //parse request steam ids into an array for each user to find games
  let STEAM_ID_LIST = urlParamReq.split("-");

  let gamesListData = [];

  Promise.all(STEAM_ID_LIST.map(element => {
    return request('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key='
      + STEAM_API_KEY + '&include_played_free_games=1&format=json&steamid=' + element);
  })).then(results => {
    results.forEach(e => {
      gamesListData.push(JSON.parse(e));
    })
  }).then(() => {
    let searchList = gamesListData.slice(1)
    let keyList = gamesListData[0].response.games

    //List of all games not in the keyList
    let searchListAppIds = []

    //list of all games in the keyList
    let keyListAppIds = []

    searchList.forEach(e => {
      e.response.games.forEach(e2 => {
        // console.log(e2.appid)
        searchListAppIds.push(e2.appid)
      })
    })

    keyList.forEach(e => {
      keyListAppIds.push(e.appid);
    })
    let commonGames = keyListAppIds.filter(value => searchListAppIds.includes(value));
    console.log("common games: " + commonGames);
    return commonGames

  }).then((commonGames) => {

    Promise.all(commonGames.map(e => {
      return (request('https://store.steampowered.com/api/appdetails/?appids=' + e))
    })).then((result => {
      let parsedRes = []
      result.forEach((value, index) => {
        let comIndex = commonGames[index]
        let p = JSON.parse(value)
        parsedRes.push(p[comIndex])

      });
      res.send(parsedRes)
    }))
  })


  // getCommonGames(SteamIdArray){
  //   var ownedGames;
  //   var commonGames;
  //   var totalUsers = SteamIdArray.length;
  //   var totalGames = Object.keys(ownedGames).length;

  //   // parse the full games list in ownedGames for each steamId
  //   for (let i = 0; i < totalUsers; i++) {
  //     ownedGames = getGamesList(SteamIdArray[i]);
  //   }

  //   // got thru the list of all owned games, and look for dupilcates.
  //   // if number of duplicates is the same as totalUser, add to commonGames
  //   // this is horribly inefficient
  //   for (let i = 0; i < totalGames; i++) {
  //     var ownerCount = 0;
  //     for (let j = i; j < totalGames; j++) {
  //       if (ownedGames[i].appid === ownedGames[j].appid) {
  //         ownerCount++;
  //       }

  //       if (ownerCounter === totalUsers) {
  //         commonGames = JSON.parse(ownedGames[i]);
  //         break; // no need to keep searching if all owners have game
  //       }
  //     }
  //   }

  //   return commonGames; // this should hopefully work. Hopefully.
  // }
});




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


// Friends information
var friendsname = " ";
var friendsid = 0;
var friendsgames = " ";

// Fetch Data
var getuserinfo = " ";
var getfriendsinfo = " ";
var returngames = " ";