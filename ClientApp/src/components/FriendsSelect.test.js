
const { names } = require('debug');
const tests = require('./FriendsSelect');
const time = require('./FriendsSelect');
const games = require('./FriendsSelect');

    test('AddFriends', () => {
            expect(
            tests(2,2)
            ).toBe(4);
    });

    test('RemoveFriends', () => {
            expect(
            tests(2,2)
            ).toBe(0);

    });

    test('MatchTime', () => {
            expect(
                time("11:30")).toMatch(/time: 11:30/);

    });

    test('UnmatchTime', () => {
        expect(
            time("11:30")).toMatch(/time: 12:30/);

});


test('MatchGameNames', () => {
    expect(
        (games("GameA")).toMatch(/GameA/))
});

test('UnmatchGameNames', () => {
    expect(
        (games("GameA")).toMatch(/GameB/))
});
