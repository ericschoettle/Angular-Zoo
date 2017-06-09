import { ZooPage } from './app.po';

describe('zoo App', () => {
  let page: ZooPage;

  beforeEach(() => {
    page = new ZooPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
