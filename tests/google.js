module.exports = {

    '@tags': ['google'],

    'Google advanced search: Elon Musk'(browser){

        const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();
/*
        const mainQueryInputSelector = 'input[name="as_q"]';  
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';   
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
*/
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
  
        

        page //browser
            .navigate()
            .setQuery(mainQuery)
            //.url('https://www.google.com/advanced_search')
            //.setValue(mainQueryInputSelector, mainQuery)
            // .click(languageDropdownOpenerSelector)
            // .click(languageDropdownValueSelector)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search();

        browser    
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input')
            .assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', "Language is set to Italian")
            .saveScreenshot('tests_output/google.png')
    }
}