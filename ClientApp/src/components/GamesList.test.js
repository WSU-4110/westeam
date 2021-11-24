// Variables
const GamesList = require('./GamesList.js'); // class being tested
const testGameList = require('./testGameList.json'); // test games list JSON file
const publicSteamId = "76561198170048678" // my public steamid 

// Test one
test('Ensure getGamesList parse the owned games of steam account correctly', () =>{
    expect(GamesList.getGamesList(publicSteamId)).toBe(testGameList.response.games);
})
