var test = require('tape');
var conversions = require('./conversions.js');
test('Does tape work?', function(t) {
    t.equal(1, 1, "1 is 1");
    t.notEqual(1, 2, "1 is not 2");
    t.end();
});

test('Unicode basic test', function(t) {
    var asBytes = new Uint8Array([72, 69, 76, 76, 79, 228, 184, 150, 231, 149, 140]);
    t.deepEqual(conversions.s2u("HELLO世界"), asBytes, "hello world unicode");
    t.end();
})