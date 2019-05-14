const assert = require('assert').strict;
const { Given, When, Then } = require('cucumber');

function add(val1, val2) {
    result = parseFloat(val1) + parseFloat(val2);
    return result;
}

// GIVEN Definitions
/* The GIVEN below is already defined in control_stepdefs.js
Given('{string} and {string} are provided', function (string1, string2) {
    this.val1 = string1;
    this.val2 = string2;
});  */ 

// WHEN Definitions

When('I ask for the sum', function () {
    this.actualResult = add(this.val1, this.val2);
});

// THEN Definitions

Then('I should obtain {float}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});

Then('I should obtain {int}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});
