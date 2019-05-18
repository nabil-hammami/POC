const assert = require('assert').strict;
const { When, Then } = require('cucumber');

function checkType(val1, val2) {
    var res1 = parseFloat(val1);
    var res2 = parseFloat(val2);
    if (isNaN(res1) || isNaN(res2)) {
        return "Not a number";
    } else {
        return "OK";
    }
}

function add(val1, val2) {
    var result = 0;
    var typeControl = checkType(val1, val2);
    if (typeControl == "OK") {
        result = parseFloat(val1) + parseFloat(val2);
    } else {
        result = 0;
    }
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
