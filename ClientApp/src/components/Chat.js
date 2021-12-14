import React, { Component } from 'react';
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, onChildAdded, ref, set } from "firebase/database";
import 'firebase/auth';
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import ReactScrollableFeed from 'react-scrollable-feed'
import { firebaseConfig } from './FIREBASE_API_KEY';
import './Chat.css';

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
let currentUser;
export class Chat extends Component {

    constructor() {
        super();

        this.state = {};

        signInAnonymously(auth)
            .then(() => {
                currentUser = auth.currentUser
                this.setState({ userId: currentUser.uid })
            })
        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         this.setState({ userId: user.uid })
        //     }
        // });
    }

    componentWillMount() {
        onChildAdded(ref(db, 'Chat/'), (newChat) => {
            this.setState({ ...this.state, chatMessages: null });
            const chatData = newChat.val();
            const chatKey = newChat.key;
            this.setState({ ...this.state, chatMessages: { ...this.state.chatMessages, chatKey: newChat.val() } });
        });

        this.getChatData();
    }

    getChatData() {
        get(child(ref(getDatabase()), `Chat/`)).then((chatData) => {
            if (chatData.exists()) {
                this.setState({ ...this.state, chatMesages: chatData.val() });
                console.log(chatData.val())
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    sendMessage() {
        let uniqueChatId = Date.now().toString() + currentUser.uid;
        let message = {
            userId: currentUser.uid,
            messageBody: document.getElementById("chatMessage").value,
            timeSent: (new Date()).toUTCString()
        }
        set(ref(db, 'Chat/' + uniqueChatId), message);
        document.getElementById("chatMessage").value = "";

        window.location.reload()
    }

    render() {
        return (
            <div>
                <div class="chatText">
                    <h1>Chat</h1>
                </div>
                {/* Dynamic list will be based off the messages you get from realtime database */}
                <ReactScrollableFeed>
                    <div class="chatBox">
                        {

                            this.state.chatMesages && this.state.userId
                                ? <ul id="chatBubbles">
                                    {
                                        Object.keys(this.state.chatMesages).map(chatId => (
                                            <li className={this.state.chatMesages[chatId].userId === this.state.userId ? 'me' : 'them'}>
                                                {this.state.chatMesages[chatId].messageBody}
                                            </li>
                                        ))
                                    }
                                </ul>
                                : <li> loading chat... </li>

                        }
                    </div>
                </ReactScrollableFeed>
                <div class="chat">
                    <textarea id="chatMessage" placeholder="Type message.." name="msg" required></textarea>
                    <button onClick={this.sendMessage} class="btnChat">Send</button>
                </div>
            </div>
        )
    }
}
