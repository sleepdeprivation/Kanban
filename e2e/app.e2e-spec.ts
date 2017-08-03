import { StarterPage } from './app.po';

describe('starter App', () => {
  let page: StarterPage;

  beforeEach(() => {
    page = new StarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
