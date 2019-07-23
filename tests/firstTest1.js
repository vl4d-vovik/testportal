module.exports = {

    '@tags': ['test1'],

    'My first test case'(browser) {
        browser
            .url('https://dis.eagleinvsys.com')
            .waitForElementVisible('.v-toolbar__title')
            .assert.containsText(".v-toolbar__title", "WIS Portal");
    }
}