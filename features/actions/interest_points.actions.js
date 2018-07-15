const { BUTTON__ENTER } = require('../utils/constants');
const routes = require('../support/routes');
const { expect } = require('chai');
const { log } = require('console');

const { 
    DIV__MESSAGE_INTEREST_POINTS,
    FIELD__SELECT_INPUT_CITY,
    BUTTON__SEARCH_CITY,
    BUTTON__SEE_DATA,
    URL__AACHEN_JSON,
    CITY__CHOOSED
} = require('../utils/interest_points.constants');

const goToInterestPointsPage = async context => {
    log(`Going to ${routes.URL__BASE}...`);
    return await context.goto(routes.URL__BASE);
}

const checkIfItIsOnTheInterestPointsPage = async context => {
    log(`Check if it´s on the interest points page...`);
    var url = await context.url();
    expect(url).to.equal(routes.URL__BASE);
} 

const fillSelectCity = async (context, city) => {
    log(`Writing ${city} name...`);
    await context.type(FIELD__SELECT_INPUT_CITY, city);
    expect(city).to.equal(CITY__CHOOSED)
};

const clickInButtonSearch = async context => {
    log('Click in search button...');
    const elm = await context.$(BUTTON__SEARCH_CITY)
    await elm.press(BUTTON__ENTER);
    log('Wait message with content...');
    await context.waitForSelector(DIV__MESSAGE_INTEREST_POINTS, { visible: true, timeout: 15 * 1000 });

    const content = await context.evaluate(
        DIV__MESSAGE_INTEREST_POINTS => document.querySelector(DIV__MESSAGE_INTEREST_POINTS).innerText,
        DIV__MESSAGE_INTEREST_POINTS
    );
    expect(content).to.contains(URL__AACHEN_JSON);
};

const clickInButtonSeeData = async context => {
    log('Click in see data button...');
    const elm = await context.$(BUTTON__SEE_DATA)
    await elm.press(BUTTON__ENTER);
    log('Wait load json data...');
    const finalResponse = await context.waitForResponse(response => response.status() === 200);
    return finalResponse.ok();
};

module.exports = {
    checkIfItIsOnTheInterestPointsPage,
    goToInterestPointsPage,
    clickInButtonSeeData,
    clickInButtonSearch,
    fillSelectCity
}
