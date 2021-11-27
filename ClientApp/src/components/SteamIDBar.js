import React, { Component, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";


function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export class SteamIDBar extends Component {
    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
            idValid: false,
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


    checkInput() {
        // get value from the object
        const SteamID = this.state.INPUT_STEAM_ID;

        if (SteamID.length != 17) {
            //return false if SteamID is not 17 digits long
            return false;
        }
        //Add more validation here
        else {
            //return true if validation tests pass.
            return true;
        }
    }

    setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        // Add error message inside small
        small.innerText = message;

        // Add error class
        formControl.className = 'form-control error';
    }

    setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
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
                    {/* If the ID is valid redirect to the friends page containing the steam ID in the URL */}
                    {/* <Alert variant="danger"></Alert> */}
                    <Button href={this.checkInput() ? "friends?id=" + this.state.INPUT_STEAM_ID : null}>Submit</Button>

                    <AlertDismissibleExample />
                </Jumbotron>
            </div>
        );
    }
}