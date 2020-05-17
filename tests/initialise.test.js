/* eslint-disable func-names */
const email = 'nightwatch@solidstategroup.com';
const password = 'password123';
const url = `http://localhost:${process.env.PORT || 8080}/signup`;
const helpers = require('./helpers');

const byId = helpers.byTestID;

module.exports = {
    '[Initialise Tests] - Register': function (browser) {
        browser.url(url)
            .waitAndSet(byId('firstName'), 'Bullet') // visit the url
            .setValue(byId('lastName'), 'Train')
            .setValue(byId('companyName'), 'Bullet Train Ltd')
            .setValue(byId('email'), email)
            .setValue(byId('password'), password)
            .click(byId('signup-btn'))
            .waitForElementVisible(byId('project-select-page'), 10000);
    },
    '[Initialise Tests] - Create project': function (browser) {
        browser.waitAndClick(byId('create-first-project-btn'), 10000)
            .waitAndSet(byId('projectName'), 'My Test Project')
            .click(byId('create-project-btn'))
            .waitForElementVisible(byId('features-page'));
    },
};
