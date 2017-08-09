import { HousingUDPage } from './app.po';

describe('housing-ud App', () => {
  let page: HousingUDPage;

  beforeEach(() => {
    page = new HousingUDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
