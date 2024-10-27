import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pageObjects } from "../objectReferences/pageObject";
const po = new pageObjects();
const configs = Cypress.env();

When(/^I expand on '(.*)' item menu$/, () => {
  cy.xpath(po.menuItemAdmin()).click();
});

Then(/^I expand '(.*)'$/, () => {
  cy.xpath(po.orgStructure()).click();
  cy.wait(2000);
});

Then(/^I click on '(.*)' item menu$/, () => {
  cy.xpath(po.areas()).click({ force: true });
  cy.wait(2000);
});

When(/^I click on '(.*)' k-button$/, () => {
  cy.xpath(po.addNewRecord()).click({ force: true });
  cy.wait(2000);
});

Then(/^I add a new Area with the name '(.*)'$/, () => {
  cy.xpath(po.addNewRecordName()).type("Area 1");
});

Then(/^I click on '(.*)'$/, () => {
  cy.xpath(po.save()).click({ force: true });
});

Then(/^I should click on '(.*)' button$/, () => {
  cy.xpath(po.delete()).eq(0).click({ force: true });
});

Then(/^I click on comfirmation button '(.*)'$/, () => {
  cy.wait(2000);
  cy.xpath(po.yesButton()).eq(0).click({ force: true });
});
