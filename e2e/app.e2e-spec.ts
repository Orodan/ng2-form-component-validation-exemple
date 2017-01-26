import { Ng2FormValidationTestPage } from './app.po';

describe('ng2-form-validation-test App', function() {
  let page: Ng2FormValidationTestPage;

  beforeEach(() => {
    page = new Ng2FormValidationTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
