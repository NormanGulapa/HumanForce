import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pageObjects } from "../objectReferences/pageObject";
const po = new pageObjects();
const configs = Cypress.env();

When(/^I click on '(.*)' button$/, () => {
  cy.xpath(po.hfAcademy()).click();
});

When(/^I search for '(.*)'$/, () => {
  cy.xpath(po.search()).type("Personal");
});

Then(
  /^I should find the article titled '(.*)' after scrolling down with url '(.*)'$/,
  (articleTitle, url) => {
    cy.visit(url, { failOnStatusCode: false });
    cy.xpath(po.findArticle(articleTitle))
      .invoke("removeAttr", "aria-label")
      .should("be.visible")
      .click();
  }
);
