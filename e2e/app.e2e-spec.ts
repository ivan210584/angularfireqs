import { AngularfireqsPage } from './app.po';

describe('angularfireqs App', () => {
  let page: AngularfireqsPage;

  beforeEach(() => {
    page = new AngularfireqsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
