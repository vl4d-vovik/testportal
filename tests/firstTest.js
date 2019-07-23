module.exports = {

    '@tags': ['test'],

    'My first test case'(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText(".hnname", "Hacker News");
    }
}