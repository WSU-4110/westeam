import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* ... Manually Enter Steam ID for Friend ... */
/* ... Adapter Design Pattern used ... */

// Example of an old interface
function SteamID() {
    this.request = function() {
        const input = prompt();
        return ({prompt});
    }
}

// Example of a new interface 
// Allows user to manually enter another friends SteamID
function NewSteamID() {
    const name = prompt("Manually enter Steam ID: ");
    alert($name);
}

// Example of an adapter interface
// Allows the client program to continue functioning without any API changes
// Adapts the old interface to the new one
function AdapterSteamID(credentials) {
    var enterSteamID = new NewSteamID();
    enterSteamID.login(credentials);

    return {
        request:function() {
            const input = prompt();
        return ({prompt});
        }
    }
}

// Client is run()
// run() calls into Adapter
function run() {
    var enterSteamID = new SteamID();
    var credentials = { token: "Steam ID: " };
    var adapter = new AdapterSteamID(credentials);

    // The original Steam ID object and the interface
    var friendSteamID = enterSteamID.request({prompt});
    console.log(friendSteamID);

    // The new Steam ID object with the adapted interface
    friendSteamID = adapter.request({prompt});
    console.log(friendSteamID);
}