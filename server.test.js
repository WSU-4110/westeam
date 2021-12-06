const sum = require('./sum');

/* Good Unit Testing Checklist
    - Automatic: Run completely by itself, without any human input.
    - Repeatable: Determine by itself whether it is passed or failed, without a human interpreting the results
    - Single responsibility: One Unit testing test exactly one feature
    - Independent: Run in isolation, separate from any other test cases (even if they test the same functions)
    - Repeatable: Multiple invocations of the test should consistently return the same value. */


/* Check that URL parameters are 17 digits */

test('westeam', () => {
    expect(sum(1, 2)).toBe(3);
});

// test('Get URL Parameters', () => {
//     expect(setURL("STEAM_ID")).toMatch(String.length == 17);
// });

// /* Test that GetOwnedGames returns true */
// test('GetOwnedGames', () => {
//     expect(testAPI("GetOwnedGames")).toMatch(true);
// });

// /* Check that correct data is pushed into the gamesList */
// test('gamesPushed', () => {
//     expect(gamesListDataPush("element")).toMatch(true);
// });

// /* Check that gamesListData appIDs are parsed */
// test('APPID parsed', () => {
//     expect(searchListAppIDs("appid")).toMatch(true);
// });

// /* Check that common games match up in each list */
// /* aka intersection operation on list */
// test('Common Games Check', () => {
//     expect(keyListAppIds.filter("Intersection operation lists")).toMatch(true);
// });

// /* check that final promise api call will finish */
// test('Promise API will complete', () => {
//     expect(Promise.commonGames("Steam")).toMatch(true);
// });

// test('Correct Api Key', () => {
//     expect(functions.key()).toBe(true);
// });
// test('Correct AuthDomain', () => {
//     expect(functions.domain()).toBe(true);
// });
// test('Correct Project ID', () => {
//     expect(functions.projectId()).toBe(true);
// });
// test('Correct Storage Bucket', () => {
//     expect(functions.bucket()).toBe(true);
// });
// test('Correct Messagining Sender ID', () => {
//     expect(functions.SenderID()).toBe(true);
// });
// test('Correct App ID', () => {
//     expect(functions.appId()).toBe(true);
// });
// test('Correct Measurment ID', () => {
//     expect(functions.measurementId()).toBe(true);
// });

// test('AddFriends', () => {
//     expect(numbers(2, 2)).toBe(2);
// });

// test('MultiplyIds', () => {
//     expect(numbers2(10 * 10)).toBe(100);
// });

// test('MatchTime', () => {
//     expect(time("11:30")).toMatch(/11:30/);
// });

// test('MatchDates', () => {
//     expect(time("November9th")).toMatch(/November9th/);
// });

// test('MatchGameNames', () => {
//     expect(games("GameA")).toMatch(/GameA/)
// });

// test('MatchGenreNames', () => {
//     expect(games("Strategy")).toMatch(/Strategy/)
// });