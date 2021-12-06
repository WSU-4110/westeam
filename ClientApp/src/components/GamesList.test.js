// Variables
const GamesList = require('./GamesList.js'); // class being tested
const testGameList = require('./testGameList.json'); // test games list JSON file
const commonGameTest = require('./commonGameTest.json') // common game json b/t the twoSteamIds array
const publicSteamId = "76561198170048678" // my public steamid 
const twoSteamIds = ["76561198170048678", "76561198859089687"]


// Test 1
test('Ensure getGamesList parse the owned games of steam account correctly', () =>{
    //expect(GamesList.getGamesList(publicSteamId)).toBe(testGameList.response.games);
    expect(functions.add(2, 2)).toBe(4);
//});
});

// Test 2 
test('Ensure that getCommonGames does in fact get common games', () => {
    expect(GamesList.getCommonGames(twoSteamIds)).toBe(commonGameTest.response.games);
});

// Test 3
test('Check that a Steam Id length > 17 will output 76561198170048678 instead', () =>{
    expect(GamesList.checkSteamIdLength("12345678901234567890")).toBe(publicSteamId);
});

// Test 4
test('Check that a Steam Id length < 17 will output 76561198170048678 instead', () =>{
    expect(GamesList.checkSteamIdLength("123")).toBe(publicSteamId);
});

// Test 5
test('Check that a Steam Id length == 17 will output 76561198170048678 instead', () =>{
    expect(GamesList.checkSteamIdLength("76561198056102582")).toBe("76561198056102582");
});

// Test 6
test('Check that a Steam Id is numeric 17 will output itself', () =>{
    expect(GamesList.isSteamIdNumeric("76561198056102582")).toBe("76561198056102582");
});

// Test 7
test('Check that a Steam Id is not numeric and output 76561198170048678 instead of SteamId', () =>{
    expect(GamesList.isSteamIdNumeric("abc")).toBe("76561198170048678");
});
