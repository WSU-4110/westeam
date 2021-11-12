export class EnterForm extends Component {
    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
        };
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

    updateInput(event) {
        this.setState({ INPUT_STEAM_ID: event.target.value });
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
                        </Col>
                    </Row>
                </Container>
                <Chat />
            </div>
        );
    }
}