import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import { SteamIDBar } from "./SteamIDBar";
import { Chat } from "./Chat";


export class Home extends Component {
    static displayName = Home.name;

    constructor() {
        super();
    }

    
  render () {
    return (
      <div>
        <h1>Home Page</h1>
            <Container className="p-3">
                <SteamIDBar />
                <Chat />
            </Container>
      </div>
    );
  }
}
