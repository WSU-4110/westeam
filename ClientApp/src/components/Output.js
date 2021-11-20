import React, { Component } from 'react';
import Table from "react-bootstrap/Table";

export class Output extends Component {
    static displayName = Output.name;

    constructor() {
        super();
        this.state = {
            COMMON_GAMES: [],
        };
    }

    componentDidMount() {
        //Grab the STEAM ID query parameter
        //This is a really ugly way of doing it but will work for now
        console.log("steamID: " + window.location.search.substring(4));
        let steamID = window.location.search.substring(4);

        //add in AJAX API call to fetch friends list.
        fetch("http://localhost:3001/output/" + steamID)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        COMMON_GAMES: result,
                    });
                    console.log(this.state.COMMON_GAMES);
                },

                (error) => {
                    console.log("API Fetch error has occured")
                }
            )
    }
    render() {
        return (
            <div>
                <h1>Output Page</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
