import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class Friends extends Component {
    static displayName = Friends.name;

    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
        };
    }

    componentDidMount() {
        //Grab the STEAM ID query parameter
        //This is a really ugly way of doing it but will work for now
        console.log("steamID: " + window.location.search.substring(4));
        let steamID = window.location.search.substring(4);


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
                <h1>Friends Page</h1>
                <Container className="p-1">
                    <Row>
                        <Col>
                            <InputGroup className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <ListGroup.Item>Friend 1</ListGroup.Item>

                            </InputGroup>
                            <InputGroup className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <ListGroup.Item>Friend 2</ListGroup.Item>

                            </InputGroup>
                            <InputGroup className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <ListGroup.Item>Friend 3</ListGroup.Item>

                            </InputGroup>
                            <InputGroup className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <ListGroup.Item>Friend 4</ListGroup.Item>
                            </InputGroup>

                        </Col>
                        <Col xs={8}>                    <Jumbotron>
                            <h2 className="header">
                                Manually Enter Friends STEAM ID
                            </h2>
                            <br />
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Example: 76561197960287930"
                                    type="text"
                                    value={this.state.INPUT_STEAM_ID}
                                    onChange={this.updateInput}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary"
                                        onClick={() => this.addItem()}
                                        disabled={!this.state.INPUT_STEAM_ID.length}>Add</Button>
                                </InputGroup.Append>
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
                        </Jumbotron></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
