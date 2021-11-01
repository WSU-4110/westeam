
import React, { Component } from 'react';
import './Chat.css';

export class Chat extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div class="chat-popup" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h1>Chat</h1>

                <label for="msg"><b>Message</b></label>
                <textarea placeholder="Type message.." name="msg" required></textarea>

                    <button type="submit" class="btn">Send</button>
            </form>
            </div>
        )
    }
}
