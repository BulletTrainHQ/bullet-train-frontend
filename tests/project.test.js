/* eslint-disable func-names */
const expect = require('chai').expect;
const helpers = require('./helpers');

const byId = helpers.byTestID;

module.exports = {
    '[Project Tests] - Create environment': function (browser) {
        browser.waitAndClick('#create-env-link')
            .waitForElementPresent('#create-env-modal')
            .waitForElementVisible('[name="envName"]')
            .setValue('[name="envName"]', 'Staging')
            .click('#create-env-btn')
            .waitForElementNotPresent('#create-env-modal')
            .waitForElementVisible(byId('switch-environment-staging-active'));
    },
    '[Project Tests] - Edit environment': function (browser) {
        browser
            .waitAndClick('#env-settings-link')
            .waitForElementVisible("[name='env-name']")
            .clearValue("[name='env-name']")
            .setValue("[name='env-name']", 'Internal')
            .click('#save-env-btn');

        browser.waitForElementVisible(byId('switch-environment-internal-active'));
    },
    '[Project Tests] - Delete environment': function (browser) {
        browser
            .waitAndClick('#delete-env-btn')
            .waitForElementVisible("[name='confirm-env-name']")
            .setValue("[name='confirm-env-name']", 'Internal')
            .click('#confirm-delete-env-btn')
            .waitForElementVisible('#project-select-page');
    },
    '[Project Tests] - View project': function (browser) {
        browser.waitForElementVisible('#project-select-0');
        browser.expect.element('#project-select-0').text.to.equal('My Test Project');
        browser.click('#project-select-0');
        browser.waitForElementVisible('#features-page');
    },
    '[Project Tests] - Edit project': function (browser) {
        browser
            .waitForElementVisible('#project-settings-link')
            .pause(200) // Slide in transition
            .waitAndClick('#project-settings-link')
            .waitForElementVisible("[name='proj-name']")
            .clearValue("[name='proj-name']")
            .setValue("[name='proj-name']", 'Test Project')
            .click('#save-proj-btn');

        browser.waitForElementVisible(byId('switch-project-test project-active'));
    },
};