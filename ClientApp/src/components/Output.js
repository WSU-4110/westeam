import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Spinner from 'react-bootstrap/Spinner'

export class Output extends Component {
    static displayName = Output.name;

    constructor() {
        super();
        this.state = {
            COMMON_GAMES: [],
            isLoaded: false,
            DISPLAY: [],
        };
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        //Grab the STEAM ID query parameter
        //This is a really ugly way of doing it but will work for now
        console.log("steamID: " + window.location.search.substring(4));
        let steamID = window.location.search.substring(4);

        let displayTemp = []
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
            ).then(() => {

                this.state.COMMON_GAMES.forEach(e => {
                    // console.log(e.data.name)
                    try {
                        // displayTemp.push(e.data.name)
                        displayTemp.push({
                            name: e.data.name,
                            img: e.data.header_image,
                            app_id: e.data.steam_appid
                        })

                    } catch (error) {
                        console.log(error)
                    }

                });
            }).then(() => {
                this.setState({
                    isLoaded: true,
                    DISPLAY: displayTemp,
                });
            })
    }


    render() {
        if (this.state.isLoaded == false || this.state.COMMON_GAMES.length == 0) {
            return <div>
                <Spinner animation="border" role="status">
                </Spinner>
            </div>
        }
        else {
            return (
                <div>
                    <h1>Commonly Owned Games</h1>

                    <Table striped bordered hover>

                        <tbody>

                            {this.state.DISPLAY.map((item, i) => {

                                return (

                                    <tr key={i}>
                                        <td>
                                            <a href={"https://store.steampowered.com/app/" + item.app_id}><Image src={item.img}></Image></a>
                                        </td>
                                        <td>
                                            <h2>{item.name}</h2></td>
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
