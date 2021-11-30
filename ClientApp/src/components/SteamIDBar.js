import React, { Component, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";


function AlertDismissibleExample(props) {
    const [show, setShow] = useState(true);

    if (!show && !props.isValid) {
        return (
            <Alert variant="danger" onClose={() => setShow(true)} dismissible>
                <Alert.Heading>Invalid Steam ID! Please try again</Alert.Heading>
                <p>
                    The Steam ID that you have entered is invalid. Please try again.
                    SteamID64's are 17-Digit Unique ID's
                </p>
            </Alert>
        );
    }
    return <Button href={props.isValid ? "friends?id=" + props.inputID : null}
        onClick={() => setShow(false)}> Submit</Button >;
}

export class SteamIDBar extends Component {
    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
        };
    }

    updateInput(event) {
        this.setState({ INPUT_STEAM_ID: event.target.value });
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

    render() {
        return (
            <div>

                <Jumbotron>
                    <h2 className="header">
                        Enter Your SteamID64
                    </h2>

                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Ex: 76561198028109433"
                            type="text"
                            value={this.state.INPUT_STEAM_ID}
                            onChange={this.updateInput}
                        />
                    </InputGroup>

                    <br />
                    <AlertDismissibleExample inputID={this.state.INPUT_STEAM_ID} isValid={this.checkInput()} />
                    <br />
                    <a href={"https://www.steamidfinder.com/"}> How do I find my SteamID64?</a>
                </Jumbotron>
            </div>
        );
    }
}