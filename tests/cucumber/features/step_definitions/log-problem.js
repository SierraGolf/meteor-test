// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');

module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.Given(/^A server side method throws an error$/, function () {
        client.click('#button');
    });

    this.When(/^An element is not found$/, function () {
        expect(browser.getText('#some-unknown-element')).toBe('some thing');
    });

};
