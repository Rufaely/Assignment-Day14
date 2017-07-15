import { AssignmentDay14Page } from './app.po';

describe('assignment-day14 App', () => {
  let page: AssignmentDay14Page;

  beforeEach(() => {
    page = new AssignmentDay14Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
