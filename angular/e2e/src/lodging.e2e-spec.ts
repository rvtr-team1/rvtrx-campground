
import { browser, logging, WebDriver, by } from 'protractor';




describe('lodging', () => {

    it('Page title contains Campsite', () => {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getTitle().then((pageTitle) => {
        expect(pageTitle).toContain('Campsite');
        });
    });

    it('Page title contains RVTR', () => {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getTitle().then((pageTitle) => {
        expect(pageTitle).toContain('RVTR');
        });
    });


    it('Should have the current URL', () => {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getCurrentUrl().then((currentUrl) => {
        expect(currentUrl).toEqual('http://localhost:4200/lodging');

        });
    });

    it('Checking page title is not empty', () => {
        browser.get('http://localhost:4200/lodging');
        browser.driver.getTitle().then((pageTitle) => {
        expect(pageTitle).toBeTrue;

        });
    });


});
