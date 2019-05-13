const assert = require('assert').strict;
const { Given, When, Then } = require('cucumber');

function add(val1, val2) {
    if (typeof val1 !== "number") {
        result = "Not a Number";
    } else {
        result = val1 + val2;
    }
    return result;
}

Given('{int} and {int} are provided', function (int1, int2) {
    this.val1 = int1;
    this.val2 = int2;
});

Given('{float} and {float} are provided', function (float, float2) {
    this.val1 = float;
    this.val2 = float2;
});

Given('{string} and {string} are provided', function (string, string2) {
    this.actualResult = add(this.string, this.string2);
});

When('I ask for the sum', function () {
    this.actualResult = add(this.val1, this.val2);
});

Then('I should obtain {int}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});

Then('I should obtain {float}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});

Then('I should obtain {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});
