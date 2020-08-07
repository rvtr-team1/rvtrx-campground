
import { browser, logging, WebDriver, by } from 'protractor';




describe('lodging', () => {
   
    it('Page title contains Campsite', function() {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getTitle().then(function(pageTitle) {
        expect(pageTitle).toContain('Campsite')
        });
    });

    it('Page title contains RVTR', function() {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getTitle().then(function(pageTitle) {
        expect(pageTitle).toContain('RVTR')
        });
    });


    it('Should have the current URL', function() {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getCurrentUrl().then(function(currentUrl) {
        expect(currentUrl).toEqual('http://localhost:4200/lodging')
    
        });
    });

    it('The length of the page title is not 7', function() {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getTitle().then(function(pageTitle){
        expect(pageTitle).length !== 7
    
        });
    });
   

});
