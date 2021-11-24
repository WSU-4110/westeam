const numbers = require('./FriendsSelect');
const numbers2 = require('./FriendsSelect');
const time = require('./FriendsSelect');
const games = require('./FriendsSelect');

    test('AddFriends', () => {
            expect(numbers(2,2)).toBe(2);
    });

    test('MultiplyIds', () => {
            expect(numbers2(10*10)).toBe(100);
    });

    test('MatchTime', () => {
            expect(time("11:30")).toMatch(/11:30/);
    });

    test('MatchDates', () => {
            expect(time("November9th")).toMatch(/November9th/);
    });

    test('MatchGameNames', () => {
    expect(games("GameA")).toMatch(/GameA/)
    });

    test('MatchGenreNames', () => {
    expect(games("Strategy")).toMatch(/Strategy/)
    });
