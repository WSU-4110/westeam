import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chat } from './Chat';

// The default error code
// An error will occur if the Steam user does not enter the correct Steam ID
export class DefaultErrorCode extends Component {
static displayName = DefaultErrorCode.name;

render() {
return (
    <form>
  Enter SteamID 
  <input type = "number" id = "fSteamID" 
  // Steam ID must be 17 digits
  required minlength = "17" maxlength = "17"/> <br></br>

  <input type = "submit" value = "Next"/>
    </form>
);
    }
}