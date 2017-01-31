import { BulletinPage } from './app.po';

describe('bulletin App', function() {
  let page: BulletinPage;

  beforeEach(() => {
    page = new BulletinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
