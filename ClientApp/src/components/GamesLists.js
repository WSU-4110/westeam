/*
import React, { Component, Suspense } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { calculateObjectSize } from 'bson'; */

const express = require("express/app");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/api/app");
const cors = require('cors')
const request = require('request-promise');
const { info } = require("console");


/*require("dotenv").config();
const STEAM_API_KEY = process.env.STEAM_API_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(express.static("./ClientApp/build/"));*/


// ==============================================================
// Will need to pass originally entered as well as selected
// SteamIDs for proper functionality. For now, just using
// hardcoded values for testing purposes
// --------------------------------------------------------------
//
// Design Pattern: Bridge 
// (https://www.geeksforgeeks.org/bridge-design-pattern/)
//
// --------------------------------------------------------------
// Plan is to use this class to take all selected SteamIDs,
// make a steeam API call to gain all owned games for each
// SteamID, then sort though each list to find common games.
// This list will be exported to server.js to fill to display
// on screen.
// ==============================================================

// Declare global constants
const testSteamIds = ["76561198170048678", "76561198028109433", "76561197960287930"];
const STEAM_API_KEY = process.env.STEAM_API_KEY;

const GamesList = {

    getGamesList: (SteamId) => {
        request('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key='
        + STEAM_API_KEY + '&steamid=' + SteamId + 
        '&include_appinfo=1&include_played_free_games=1').then(function (gamesListBody) {
            return JSON.parse(gamesListBody).response.games
        })
    },

    // Note for passing an array in JS:
    // https://www.samanthaming.com/tidbits/48-passing-arrays-as-function-arguments/
    getCommonGames: (SteamIdArray) => {
        var ownedGames;
        var commonGames;
        var totalUsers = SteamIdArray.length;
        var totalGames = Object.keys(ownedGames).length;

        // parse the full games list in ownedGames for each steamId
        for(let i = 0; i < totalUsers; i++){
            ownedGames = getGamesList(SteamIdArray[i]);
        }

        // got thru the list of all owned games, and look for dupilcates.
        // if number of duplicates is the same as totalUser, add to commonGames
        // this is horribly inefficient
        for(let i = 0; i < totalGames; i++){
            var ownerCount = 0;
            for(let j = i; j < totalGames; j++){
                if(ownedGames[i].appid === ownedGames[j].appid){
                    ownerCount++;   
                }

                if(ownerCounter === totalUsers) {
                    commonGames = JSON.parse(ownedGames[i]);
                    break; // no need to keep searching if all SteamIds own game
                }
            }
        }

        return commonGames; // this should hopefully work. Hopefully.
    },

    canGetGamesList: (SteamId) => {
        // this function checks if user entered SteamId will return a games list
        // reasons for invalidity may be: SteamId DNE, account set to private
        var gamesList = getGamesList(SteamId);

        if (gamesList == NULL){
            return false;
        }

        return true;
    }
}
module.exports = GamesList;
//}