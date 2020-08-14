import { browser, logging, WebDriver, by, element } from 'protractor';

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

  it('Checking page title length', () => {
    browser.get('http://localhost:4200/lodging');
    browser.driver.getTitle().then((pageTitle) => {
      expect(pageTitle.length).toBe(15);
    });
  });

  it('Should have the current URL', () => {
    browser.get('http://localhost:4200/lodging');
    browser.driver.getCurrentUrl().then((currentUrl) => {
      expect(currentUrl).toEqual('http://localhost:4200/lodging');
    });
  });

  it('Should be on the current URL for Lodging Test details', () => {
    browser.get('http://localhost:4200/lodging/details/1');
    browser.driver.getCurrentUrl().then((currentUrl) => {
      expect(currentUrl).toEqual('http://localhost:4200/lodging/details/1');
    });
  });

  it('Should be on the current URL for Lodging Test2 details', () => {
    browser.get('http://localhost:4200/lodging/details/2');
    browser.driver.getCurrentUrl().then((currentUrl) => {
      expect(currentUrl).toEqual('http://localhost:4200/lodging/details/2');
    });
  });

  it('Should be on the current URL for Lodging Test3 details', () => {
    browser.get('http://localhost:4200/lodging/details/3');
    browser.driver.getCurrentUrl().then((currentUrl) => {
      expect(currentUrl).toEqual('http://localhost:4200/lodging/details/3');
    });
  });
});
