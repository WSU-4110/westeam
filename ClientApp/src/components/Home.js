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
import { ErrorPage } from './ErrorPage';

export class Home extends Component {
    static displayName = Home.name;

    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
        };
    }

    updateInput(event) {
        this.setState({ INPUT_STEAM_ID: event.target.value });
    }

    addItem() {
        let newEntry = {
            id: 1 + Math.random(),
            value: this.state.INPUT_STEAM_ID.slice(),
        };

        const list = [...this.state.STEAM_ID_LIST];

        list.push(newEntry);

        this.setState({
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: list
        });
    }

    deleteItem(id) {
        const list = [...this.state.STEAM_ID_LIST];

        const updatedList = list.filter(function (item) {
            if (item.id !== id) {
                return item;
            }
        });

        this.setState({ STEAM_ID_LIST: updatedList });
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Container className="p-1">
                    <Row>
                        <Col xs={8}>                    <Jumbotron>
                            <h2 className="header">
                                Enter Your Steam ID
                            </h2>
                            <br />
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Example: 76561198028109433"
                                    type="text"
                                    value={this.state.INPUT_STEAM_ID}
                                    onChange={this.updateInput}
                                />

                            </InputGroup>
                            <br />

                            <ListGroup >
                                {this.state.STEAM_ID_LIST.map((item) => {
                                    return (
                                        <ListGroup.Item key={item.id} variant="success">
                                            {item.value}
                                            <Button onClick={() => this.deleteItem(item.id)}
                                                variant="danger"
                                                style={{ float: "right" }}>Remove</Button>
                                        </ListGroup.Item>
                                    );
                                })}
                            </ListGroup>
                            {/* <Button href="friends">Submit</Button> */}
                            <Button href={"friends?id=" + this.state.INPUT_STEAM_ID}>Submit</Button>


                        </Jumbotron>
                            <footer>Example ID: 76561198028109433</footer>
                            <ErrorPage />
                        </Col>
                    </Row>
                </Container>
                <Chat />
            </div>
        );
    }
}