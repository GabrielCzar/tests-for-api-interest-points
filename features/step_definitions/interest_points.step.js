const interestPointsActions = require('../actions/interest_points.actions');
const { Given, When, Then } = require('cucumber');
const scope = require('../support/scope');

Given('I am in interest points screen', function () {
    let context = scope.page;
    return interestPointsActions.checkIfItIsOnTheInterestPointsPage(context);
});

When('I select the city {string}', function (city) {
    let context = scope.page;
    return interestPointsActions.fillSelectCity(context, city);
});

When('Click in Search', function () {
    let context = scope.page;
    return interestPointsActions.clickInButtonSearch(context); 
});

Then('Click in See data', function () {
    let context = scope.page;
    return interestPointsActions.clickInButtonSeeData(context); 
});
