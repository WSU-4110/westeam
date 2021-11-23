import React, { Component } from 'react';
import Table from "react-bootstrap/Table";

export class Output extends Component {
    static displayName = Output.name;

    constructor() {
        super();
        this.state = {
            COMMON_GAMES: [],
            isLoaded: false,
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
                        isLoaded: true
                    });
                    console.log(this.state.COMMON_GAMES);
                },

                (error) => {
                    console.log("API Fetch error has occured")
                }
            )
    }
    render() {
        if (this.state.isLoaded == false || this.state.COMMON_GAMES.length == 0 || !this.state.COMMON_GAMES) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <h1>Output Page</h1>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
                                <th>Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td>Otto</td>
                            </tr>
                            [0][400].data.name
                            {this.state.COMMON_GAMES.map((item) => {
                                return (
                                    <tr>
                                        poggies
                                        {/* {(item.data.name) ? item.data.name : null} */}
                                        {console.log(item.name)}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            );
        }

    }
}
