import { DynamicAttrPage } from './app.po';

describe('dynamic-attr App', () => {
  let page: DynamicAttrPage;

  beforeEach(() => {
    page = new DynamicAttrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
