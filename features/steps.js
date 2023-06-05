const { Before, Given,When, Then } = require("@cucumber/cucumber")

let x
Given ('I buy drilling tool worth ${int}', function(int){
    x=int
});

Given ('I buy the plant worth ${int}', function (int){
    x=x+int
});

Then('total due amount is ${int}', function(int){

    console.log(x);
})