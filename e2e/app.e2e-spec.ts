import { FccPortfolioPage } from './app.po';

describe('fcc-portfolio App', function() {
  let page: FccPortfolioPage;

  beforeEach(() => {
    page = new FccPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fp works!');
  });
});
