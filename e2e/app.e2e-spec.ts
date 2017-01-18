import { Test25Page } from './app.po';

describe('test25 App', function() {
  let page: Test25Page;

  beforeEach(() => {
    page = new Test25Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
