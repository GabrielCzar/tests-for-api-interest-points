const { BUTTON__ENTER } = require('../utils/constants');
const routes = require('../support/routes');
const { expect } = require('chai');
const { log } = require('console');
const {
    BUTTON__CITIES
} = require('../utils/cities.constants');

const goToApiDocsPage = async context => {
    log(`Going to ${routes.URL__API_DOCS}...`);
    return await context.goto(routes.URL__API_DOCS);
}

const checkIfItIsOnTheApiDocsPage = async context => {
    log(`Check if it´s on the Api docs page...`);
    var url = await context.url();
    expect(routes.URL__API_DOCS).to.contains(url);
} 

const clickInTheEndpointCitiesAndSeeData = async context => {
    log('Click in cities button...');
    const elm = await context.$(BUTTON__CITIES)
    await elm.press(BUTTON__ENTER);
    log('Wait load json data...');
    const finalResponse = await context.waitForResponse(response => response.status() === 200);
    return finalResponse.ok();
};

module.exports = {
    clickInTheEndpointCitiesAndSeeData,
    checkIfItIsOnTheApiDocsPage,
    goToApiDocsPage,
}