const assert = require('assert').strict;
const { Given, When, Then } = require('cucumber');

function checkType(val1,val2) {
    var res1 = parseFloat(val1);
    var res2 = parseFloat(val2);
    if (isNaN(res1)||isNaN(res2)) {
        return "Not a number";
    } else {
        return "OK";
    }
}

// GIVEN Definitions

Given('{string} and {string} are provided', function (string1, string2) {
    this.val1=string1;
     this.val2=string2;
});

// WHEN Definitions

When('I check the type', function () {
    this.actualResult=checkType(this.val1,this.val2);
})

// THEN Definitions

Then('I should obtain {string}', function (expectedResult) {
    assert.strictEqual(this.actualResult, expectedResult);
});
