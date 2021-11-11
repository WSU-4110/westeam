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
class FriendsList{
    constructor(friendslist) {
    super();
    this.friendslist = friendslist;
    this.friendslistitems = [];
    }
    
}

add(friends);{
    var i;
    var max;
    for (i = 0; i < max; i++){
    if (friendslist) < this.friendslist {
        this.friendslistitems[i];       
    }
    else {
        console.log("Failed to get list")
    }
}
}

class TimeSinceFriend{
    constructor(date) {
    super();
    this.date = date;
    this.dateitem = [];
    }
}

add(date);{
    var i;
    var max;
    for (i = 0; i < max; i++) {
        if (date) < this.date {
            this.dateitem[i];
        }
    }
}

class FriendsGames{
    constructor(gameslist){
    super();
    this.gameslist = gameslist;
    this.gameslistitem = [];
    }
}

add(gameslist);{
    var i;
    var max;
    for (i = 0; i < max; i++){
        if (gameslist) < this.gameslist{
            this.gameslistitem[i];
        }
    }
}
