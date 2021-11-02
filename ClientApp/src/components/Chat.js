
import React, { Component } from 'react';
import './Chat.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onChildAdded } from "firebase/database";
import { firebaseConfig } from './FIREBASE_API_KEY';



const app = initializeApp(firebaseConfig);
const db = getDatabase();


export class Chat extends Component {
    constructor() {
        super();
    }

    sendMessage() {
        let uniqueChatId = "userId+" + Date.now(); // Make this more unique
        let message = {
            messageBody: document.getElementById("msg").value, // get from the msg textarea
            timeSent: (new Date()).toUTCString()
            // add user info for chat bubble placement
        }

        set(ref(db, 'Chat/' + uniqueChatId), message);

        document.getElementById("msg").value = "";
    }


    render() {
        const chatRef = ref(db, 'Chat/');
        onChildAdded(chatRef, (newChat) => {
            const data = newChat.val();
            console.log(data);
        });

        return (
            <div class="chat" id="myForm">
                <h1>Chat</h1>


                {/* Create a dynamic list of chat bubbles, left if other user, right if current user */}
                {/* Dynamic list will be based off the messages you get from realtime database */}


                <textarea id="msg" placeholder="Type message.." name="msg" required></textarea>

                <button onClick={this.sendMessage} class="btnChat">Send</button>
            </div>
        )
    }
}
