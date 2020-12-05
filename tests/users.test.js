/* eslint-disable func-names */
const expect = require('chai').expect;
const { byTestID: byId, setSegmentRule } = require('./helpers');

module.exports = {
    '[Users Tests] - Create features': function (browser) {
        testHelpers.gotoFeatures(browser);
        testHelpers.createFeature(browser, 0, 'flag', true);
        testHelpers.createRemoteConfig(browser, 0, 'config', 0);
    },
    '[Users Tests] - Toggle flag for user': function (browser) {
        testHelpers.goToUser(browser, 0);

        browser
            .waitAndClick(byId('user-feature-switch-0-on'))
            .waitAndClick('#confirm-toggle-feature-btn')
            .waitForElementNotPresent('#confirm-toggle-feature-modal')
            .waitForElementVisible(byId('user-feature-switch-0-off'));
    },
    '[Users Tests] - Edit flag for user': function (browser) {
        browser
            .pause(200)
            .waitAndClick(byId('user-feature-1'))
            .waitForElementPresent('#create-feature-modal')
            .waitForElementVisible('[name="featureValue"]')
            .pause(200) // todo: Clear fails without a delay here. Find better solution
            .clearValue('[name="featureValue"]')
            .setValue('[name="featureValue"]', 'small')
            .click('#update-feature-btn')
            .waitForElementNotPresent('#create-feature-modal')
            .expect.element(byId('user-feature-value-1')).text.to.equal('"small"');
    },
    '[Users Tests] - Toggle flag for user again': function (browser) {
        browser
            .pause(200) // Additional wait here as it seems rc-switch can be unresponsive for a while
            .click(byId('user-feature-switch-0-off'))
            .waitAndClick('#confirm-toggle-feature-btn')
            .waitForElementNotPresent('#confirm-toggle-feature-modal')
            .waitForElementVisible(byId('user-feature-switch-0-on'));
    },
};
