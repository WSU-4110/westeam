import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export class SteamIDBar extends Component {
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
                <Jumbotron>
                    <h1 className="header">
                        westeam
                    </h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter SteamID or Steam CommunityID, Profile URL or Keywords"
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
                    <Button href={"friends?id=" + this.state.INPUT_STEAM_ID}>Submit</Button>

                </Jumbotron>
            </div>
        );
    }
}