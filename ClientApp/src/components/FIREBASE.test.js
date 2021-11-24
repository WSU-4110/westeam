const functions = require('./FIREBASE');

test('Correct Api Key', () => {
    expect(functions.key()).toBe(true);
});
test('Correct AuthDomain', () => {
    expect(functions.domain()).toBe(true);
});
test('Correct Project ID', () => {
    expect(functions.projectId()).toBe(true);
});
test('Correct Storage Bucket', () => {
    expect(functions.bucket()).toBe(true);
});
test('Correct Messagining Sender ID', () => {
    expect(functions.SenderID()).toBe(true);
});
test('Correct App ID', () => {
    expect(functions.appId()).toBe(true);
});
test('Correct Measurment ID', () => {
    expect(functions.measurementId()).toBe(true);
});
