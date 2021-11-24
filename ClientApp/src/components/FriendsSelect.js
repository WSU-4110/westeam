
/*export class Friends extends Component {
    static displayName = Friends.name;

    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
            FRIENDS_LIST: [],
        };
    }

    componentDidMount() {
        //Grab the STEAM ID query parameter
        //This is a really ugly way of doing it but will work for now
        console.log("steamID: " + window.location.search.substring(4));
        let steamID = window.location.search.substring(4);

        //add in AJAX API call to fetch friends list.
        fetch("http://localhost:3001/friends/" + steamID)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        FRIENDS_LIST: result,
                    });
                    console.log(this.state.FRIENDS_LIST);
                },

                (error) => {
                    // this.setState({
                    //     isLoaded: true,
                    //     error
                    // });
                    console.log("API Fetch error has occured")
                }
            )
    }
    
}
*/

// Homework 4 Muneeb Khan
/* For My Design pattern I am using decorator to create smaller objects for selecting 
friends based on their ID, date since friend, and games they have */

// This class will get the ID of the friends

class FriendsList{
    constructor(friendslist, names) {
    this.friendslist = friendslist;
    this.friendslistitems = [];
    this.names = names;
    }
    
}

// This function will loop through the items of IDs
FriendsList.prototype.decorate = function(friendslist){
    this.friendslistitems.push(friendslist, names);


}

function numbers(a,b) {
    return a + b;
}
module.exports = numbers;

function numbers2(a,b) {
    return (a*b);
}
module.exports = numbers2;

// This class will get the time since this ID was the users friend
class TimeSinceFriend{
    constructor(date) {
    this.date = date;
    this.dateitem = [];
    }
}

// This function will loop through the list of dates in friends list
TimeSinceFriend.prototype.decorate = function(date){
    this.dateitem.push(date)
}


function time(t){
    const times = t;
    return times;
}
module.exports = time; 

// This function will get the list of games each friend has
class FriendsGames{
    constructor(gameslist){
    this.gameslist = gameslist;
    this.gameslistitem = [];
    }
}

// This function will loop through the list of items of games in each friends game list
FriendsGames.prototype.decorate = function(gameslist){
    this.gameslistitem.push(gameslist)
}

function games(name){
    const gamename = name;
    return gamename;
}
module.exports = games;
