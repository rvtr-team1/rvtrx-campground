import { browser, logging, WebDriver, by, element } from 'protractor';

describe('lodging', () => {
  it('Page title contains Campsite', () => {
    browser.get('http://localhost:4200/lodging');
    browser.driver.getTitle().then((pageTitle) => {
      expect(pageTitle).toContain('Campground');
    });
  });

  it('Page title contains RVTR', () => {
    browser.get('http://localhost:4200/lodging');
    browser.driver.getTitle().then((pageTitle) => {
      expect(pageTitle).toContain('RVTR');
    });
  });

  it('Checking page title length', () => {
    browser.get('http://localhost:4200/lodging');
    browser.driver.getTitle().then((pageTitle) => {
      expect(pageTitle.length).toBe(17);
    });
  });

  it('Should have the current URL', () => {
    browser.get('http://localhost:4200/lodging');
    browser.driver.getCurrentUrl().then((currentUrl) => {
      expect(['http://localhost:4200/lodging', 'http://localhost:4200/error']).toContain(
        currentUrl
      );
    });
  });

  it('Should be on the current URL for Lodging Test details', () => {
    browser.get('http://localhost:4200/lodging/details/1');
    browser.driver.getCurrentUrl().then((currentUrl) => {
      expect(['http://localhost:4200/lodging/details/1', 'http://localhost:4200/error']).toContain(
        currentUrl
      );
    });
  });
});
