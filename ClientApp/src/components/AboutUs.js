import React, { Component } from 'react';

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    constructor() { // Super constructor to inherit from other classes
        super();
    }

    render() { // To setup the overall webpage

        return ( // The webpage is setup inside the div element. Header 1 h1 element would be the title of the webpage.
          // Header 3 h3 elements are used for the titles of each sub topic
          // The p element is used for each description
          // Ordered lists (ol) are used to organize the steps each with (li) element
          // Finally the <br/> element is used to add spaces between each paragraph 
          <div>
            <h1>About Us</h1>
            <br/>
          
            <img src="westeam-logo.png" alt="westeamlogo"></img>
            <br/>


            <p>We are a group of Steam players ourselves and are dedicated to helping others 
            find the best games which we would reccommend to them based on what their friends play.</p>
            <br/>

            <h3>Getting Started</h3>
            <br/>

            <p>In order to get started with using our website, the user would need to make their Steam account public, 
            which allows the website to fetch the data from their Steam ID.</p>
            <br/>


            <h3>Make Steam account public</h3>
            <br/>

            <ol>
            <li>Go to your Steam Profile by clicking your Username
            at the top of the Steam interface.</li>
            <li>Click the "Edit Profile" option.</li>
            <li>Go to "My Privacy" settings.</li>
            <li>Change your privacy settings.</li>
            <li>Set all options to public.</li>
            </ol>
            <br/>

            <h3>Login Page</h3>
            <br/>

            <p> On the Home Page there will be box asking to "Enter the Steam ID. The user will provide their ID and click to submit."</p>
            <br/>

            <h3>Getting Friends List</h3>
            <br/>

            <p>After the user has entered their Steam ID information, they will be directed to the Friends
            List page. The website will retreive the friends information from the User ID and 
            print out a list of the users friends.</p>
            <br/>

            <p>The user may also have the option to manually enter a friends ID. There will be 
            a search box named "Enter Friends ID" where the user may enter a friends ID and that
            same ID will be added to the list.</p>
            <br/>

            <h3>Reccommendations</h3>
            <br/>

            <p>After the user has selected their friends and submitted, the website will retrieve the
            list of games from each friend. The website will then display the games that the user and their
            friends own while printing them in order from the most to the least played.</p>
            <br/>

            <p>The user will have the option to select which games they are interested in playing
            and will be redirected to the steam link to purchase that specific game.</p>
            <br/>

            <h3>Summary of Steps</h3>
            <br/>

            <ol>
            <li>You must make your account public.</li>
            <li>You then need tp provide your Steam ID to the website.</li>
            <li>After you have entered your Steam ID you will be directed to the Friends page.</li>
            <li>The website will automatically pull a list of your friends list that is linked to your account.</li>
            <li>You may either select a friend from the list or manually enter a friends Steam ID.</li>
            <li>After you have selected your friends, the website gathers data from you and your friend's Steam ID</li>
            <li>The website will pull all the games owned by you and your friends.</li>
            </ol>
            <br/>

            <h3>Support?</h3>
            <br/>

            <p>If you still have questions or need help with using our software. We have a public chatbox available on the 
            homepage. Ask for support and a team member will reach out to you. Your name and id will remain anonymous on the
            chatbox.</p>
          </div>
        );
      }
}