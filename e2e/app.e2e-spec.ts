import { LolPage } from './app.po';

describe('lol App', function() {
  let page: LolPage;

  beforeEach(() => {
    page = new LolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
