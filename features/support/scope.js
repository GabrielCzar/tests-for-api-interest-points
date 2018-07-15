const puppeteer = require('puppeteer');
const { log } = require('console');

class CustomScope {
    async open() {
        log('Openning browser...');
        this.driver = this.driver || await puppeteer.launch({ headless: false, slowMo: 60 });
        this.page = this.page || await this.driver.newPage();
    }

    async close() {
        log(`Finalized.`);
        await this.driver.close();
    }
}

module.exports = new CustomScope();