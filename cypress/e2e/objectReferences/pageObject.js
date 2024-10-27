export class pageObjects {
  header(value) {
    const selector = "h2:contains('" + value + "')";
    return selector;
  }

  expandItem(value) {
    cy.wait(2000);
    const selector = "//*/parent::button//*[contains(text(),'" + value + "')]";
    return selector;
  }

  learnMoreHyperLink() {
    const selector =
      "/html//div[@id='__nuxt']/div[@class='js-animate-footer']/div[3]/section[3]/div/div[2]/div[2]/div[@class='w-full']/div[1]/div//div[@class='col-span-1']/div[1]/div/div[2]/div/div//a[@href='/product/workforce-management/time-and-attendance']";
    return selector;
  }

  hfAcademy() {
    const selector =
      "//div[@class='walkme-icon-image-div walkme-launcher-image-div']";
    return selector;
  }

  search() {
    const selector =
      "//div[@id='walkme-1260143-tab-content']//input[contains(@placeholder,'Type in your question...')]";
    return selector;
  }

  findArticle() {
    cy.wait(2000);
    const selector =
      "//div[@class='some-class'][1]//div[@class='another-class'][10]//div[1]";
    return selector;
  }

  card(value) {
    const selector = "//span[normalize-space()='" + value + "']";
    return selector;
  }

  userNameField() {
    const selector = "(//input[@id='UserName'])[1]";
    return selector;
  }

  passwordField() {
    const selector = "(//input[@id='Password'])[1]";
    return selector;
  }

  button(value) {
    const selector =
      "//*[text()='" +
      value +
      "']/parent::button|//*[contains(text(),'" +
      value +
      "')]/parent::button|//*[contains(text(),'" +
      value +
      "')]/parent::div[contains(@class,'button')]|//*[contains(text(),'" +
      value +
      "')]/parent::*/parent::button";
    return selector;
  }

  label(value) {
    const selector = "(//*[contains(text(),'" + value + "')])[1]";
    return selector;
  }

  menuItemAdmin() {
    const selector = "//span[normalize-space()='Admin']";
    return selector;
  }

  orgStructure() {
    const selector = "//span[normalize-space()='Org Structure']";
    return selector;
  }

  areas() {
    const selector = "//a[@id='MenuSubItem_Button_Areas']";
    return selector;
  }

  addNewRecord() {
    const selector = "//a[@class='k-button k-grid-add']";
    return selector;
  }

  addNewRecordName() {
    const selector = "//input[@id='Name']";
    return selector;
  }
  save() {
    const selector = "//a[normalize-space()='Save']";
    return selector;
  }

  edit() {
    const selector = "//a[normalize-space()='Edit'";
    return selector;
  }

  update() {
    const selector = "//input[@id='Name']";
    return selector;
  }

  delete() {
    const selector = "//a[normalize-space()='Delete']";
    return selector;
  }

  yesButton() {
    const selector = "//a[normalize-space()='Yes']";
    return selector;
  }
}
