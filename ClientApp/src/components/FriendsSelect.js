import React, { Component, Suspense } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { get } from 'jquery';


/*export class Friends extends Component {
    static displayName = Friends.name;

    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
            FRIENDS_LIST: [],
        };
    }

    componentDidMount() {
        //Grab the STEAM ID query parameter
        //This is a really ugly way of doing it but will work for now
        console.log("steamID: " + window.location.search.substring(4));
        let steamID = window.location.search.substring(4);

        //add in AJAX API call to fetch friends list.
        fetch("http://localhost:3001/friends/" + steamID)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        FRIENDS_LIST: result,
                    });
                    console.log(this.state.FRIENDS_LIST);
                },

                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                    console.log("API Fetch error has occured")
                }
            )
    }
    
}
*/

// Homework 4 Muneeb Khan
/* For My Design pattern I am using decorator to create smaller objects for selecting 
friends based on their ID, date since friend, and games they have */

// This class will get the ID of the friends

class FriendsList{
    constructor(friendslist, names) {
    this.friendslist = friendslist;
    this.friendslistitems = [];
    this.names = names;
    }
    
}

// This function will loop through the items of IDs
FriendsList.prototype.decorate = function(friendslist){
    this.friendslistitems.push(friendslist, names);
}


// This class will get the time since this ID was the users friend
class TimeSinceFriend{
    constructor(date) {
    this.date = date;
    this.dateitem = [];
    }
}

// This function will loop through the list of dates in friends list
TimeSinceFriend.prototype.decorate = function(date){
    this.dateitem.push(date)
}

// This function will get the list of games each friend has
class FriendsGames{
    constructor(gameslist){
    this.gameslist = gameslist;
    this.gameslistitem = [];
    }
}

// This function will loop through the list of items of games in each friends game list
FriendsGames.prototype.decorate = function(gameslist){
    this.gameslistitem.push(gameslist)
}
