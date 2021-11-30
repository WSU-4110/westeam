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
import { SteamIDBar } from './SteamIDBar';

export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Container className="p-1">
                    <Row>
                        <Col xs={8}>
                            <Jumbotron>
                                <SteamIDBar />
                            </Jumbotron>
                            <footer>Example ID: 76561198028109433</footer>

                        </Col>
                        <Col xs={8}>
                            <Chat />

                        </Col>
                    </Row>
                </Container>



            </div>
        );
    }
}