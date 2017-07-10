import { FlubitTestPage } from './app.po';

describe('flubit-test App', () => {
  let page: FlubitTestPage;

  beforeEach(() => {
    page = new FlubitTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
