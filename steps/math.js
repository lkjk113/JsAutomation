const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({ Given, Then, When }) {
let a;
let b;


  Given('I start with {int}', function (int) {
     a=int;
  });
  When('I add {int}', function (int) {
    b=a+int;
  });
  Then('I end up with {int}', function (int) {
    assert.equal(b,int);
  });
});