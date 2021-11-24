// Create a class 
class Home {
    constructor() {
        super();
        this.updateInput = this.updateInput.bind(this);
        this.state = {
            INPUT_STEAM_ID: "",
            STEAM_ID_LIST: [],
        };
    }
}
// Create a list of functions (up to 6)
// function 1
const function1 = require('/components/User/GitHub/westeam/function1');
// function 2
const function2 = require('/components/User/GitHub/westeam/function2');
// function 3
const function3 = require('/components/User/GitHub/westeam/function3');
// function 4
const function4 = require('/components/User/GitHub/westeam/function4');
// function 5
const function5 = require('/components/User/GitHub/westeam/function5');
// function 6
const function6 = require('/components/User/GitHub/westeam/function6');

// Run first test
test('Check function 1', () => {
    expect(function1("Run first test")).toMatch(Home.js);
});

// Test the second function
test('Check function 2', () => {
    expect(function2("Test the second function")).toMatch(Home.js);
});

// Function 3
test('Check function 3', () => {
    expect(function3("Function 3")).toMatch(Home.js);
});

// Check function 4
test('Check function 4', () => {
    expect(function4("Check function 4")).toMatch(Home.js);
});

// Function 5 test
test('Check function 5', () => {
    expect(function5("Function 5 test")).toMatch(Home.js);
});

// Run final test
test('Check function 6', () => {
    expect(function6("Run final test")).toMatch(Home.js);
});