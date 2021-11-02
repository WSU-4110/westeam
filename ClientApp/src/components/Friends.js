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

                            <div >
                                {this.state.FRIENDS_LIST.map((item) => {
                                    return (
                                        <>
                                            <InputGroup className="mb-1">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                                </InputGroup.Prepend>
                                                <ListGroup.Item>{item[0].personaname}</ListGroup.Item>
                                            </InputGroup>
                                        </>
                                    );
                                })}
                            </div>

                        </Col>
                        <Col xs={8}>                    <Jumbotron>
                            <h1 className="header">
                                Manually Enter Friends STEAM ID
                            </h1>
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
