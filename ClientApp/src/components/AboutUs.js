import React, { Component } from 'react';

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    constructor() {
        super();
    }

    render() {
    
        return (
          <div>
            <h1>About Us</h1>
            <br/>

            <p>We are a company that is dedicated to helping our players finding the 
            best games we would reccommend to them based on what their friends play.</p>
            <br/>

            <h2>Getting Started</h2>
            <br/>

            <p>In order to get started with using our website the user would first need to make their steam account public, 
            in order for the website to fetch data from their Steam ID.</p>
            <br/>


            <h3>Making the account public</h3>
            <ul>
            <li>1. Go to your Steam Profile. Go to your Steam Profile by clicking your Username
            at the top of the steam interface.</li>
            <li>2. Click the Edit Profile button.</li>
            <li>3. Go to my privacy settings.</li>
            <li>4. Change your privacy settings.</li>
            <li>5. Set all options to public.</li>
            </ul>
            <br/>

            <h2>Login Page</h2>
            <br/>

            <p> On the Home Page there will be box asking to "Enter the Steam ID. The user will provide their ID and click to submit.</p>
            <br/>

            <h2>Getting Friends List</h2>
            <br/>

            <p>After the user has entered their ID information they will be directed to the friends
            list page. The website will retreive the friends information from the User ID and 
            print out a list of the Users friends.</p>
            <br/>

            <p>The User may also have to option to manually enter a friends ID. There will be 
            an "Enter Friends ID" search box which the user may use to enter a friends ID and that
            friends account will be added to the list.</p>
            <br/>

            <h2>Reccommendations</h2>
            <br/>

            <p>After the user has selected their friends and submitted the website will retrieve the
            list of games from each friend. The website will then output and display the games that 
            the user and their friends own and will print them in order from the most to least played.</p>
            <br/>

            <p>The user will then have the option to select which games they are interested in trying
            and will be redirected to the steam link to purchase that game.</p>
            <br/>

            <h3>Summary of Steps</h3>
            <br/>

            <ul>
            <li>1. You will need to make your account public.</li>
            <li>2. You will then need provide your Steam ID to the website.</li>
            <li>3. After you have provided your ID you will be directed to the friends page.</li>
            <li>4. The website will automatically pull a list of your friends linked to your account.</li>
            <li>5. You may either select a friend from the list or manually enter a friends ID.</li>
            <li>6. After you have selected your friends the website will gather data from yours and your friends IDs</li>
            <li>7. The website will then pull all the games owned by you and your friends.</li>
            </ul>
            <br/>

            {contents}
          </div>
        );
      }
}
