// Libraries
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { pageObjects } from "../objectReferences/pageObject";
const po = new pageObjects();

const configs = Cypress.env();

Given(/^I am logged in as '(.*)'$/, (user) => {
  cy.login(user);
});

Given(/^I am in the landing page of '(.*)'$/, (url) => {
  cy.visitLanding(url);
});

When(/^I navigated to '(.*)' card$/, (headerName) => {
  cy.get(po.header(headerName, { timeout: 2000 })).scrollIntoView();
});

When(/^I expand on '(.*)'$/, (name) => {
  cy.xpath(po.expandItem(name)).click({ force: true });
});

When(/^I click on '(.*)' hyperlink$/, () => {
  cy.xpath(po.learnMoreHyperLink()).click();
});

When(/^I click on '(.*)' card$/, (cardName) => {
  cy.xpath(po.card(cardName)).scrollIntoView().click();
});

When(/^'(.*)' should be displayed$/, (label) => {
  cy.xpath(po.label(label)).scrollIntoView().click();
});

Then(/^I should be redirected to '(.*)' with url '(.*)'$/, (page, url) => {
  cy.verifyMetaTitle(page);
  cy.url().should("include", url, { timeout: 20000 });
});
