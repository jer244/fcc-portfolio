import { browser, element, by } from 'protractor';

export class FccPortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fp-root h1')).getText();
  }
}
