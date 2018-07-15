const { Before, BeforeAll, AfterAll, setDefaultTimeout } = require('cucumber');
const interestPointActions = require('../actions/interest_points.actions');
const citiesActions = require('../actions/cities.actions');
const scope = require('./scope');

setDefaultTimeout(30 * 1000);

// before each scenario
BeforeAll(async function () {
    await scope.open();
});

Before('@InterestPoint', async function () {
    return await interestPointActions.goToInterestPointsPage(scope.page);
});

Before('@Docs', async function () {
    return await citiesActions.goToApiDocsPage(scope.page);
});

AfterAll(function () {
    return scope.close();
})

