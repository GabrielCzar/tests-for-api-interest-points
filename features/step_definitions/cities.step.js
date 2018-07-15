const citiesActions = require('../actions/cities.actions');
const { Given, When, Then } = require('cucumber');
const scope = require('../support/scope');

Given('I am in api docs screen', function () {
    let context = scope.page;
    return citiesActions.checkIfItIsOnTheApiDocsPage(context);
});

Then('I select the endpoint cities and see the data', function () {
    let context = scope.page;
    return citiesActions.clickInTheEndpointCitiesAndSeeData(context);
});
