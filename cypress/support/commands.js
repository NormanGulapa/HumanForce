// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { pageObjects } from "../e2e/objectReferences/pageObject";
const po = new pageObjects();
const configs = Cypress.env();

Cypress.Commands.add("visitLanding", (url) => {
  let visitUrl;

  switch (url.toLowerCase()) {
    case "humanforce":
      visitUrl = configs.env.webBaseUrl;
      break;

    case "qa test challenge":
      visitUrl = configs.env.testChallengeUrl;
      break;

    case "hf academy help article":
      visitUrl = configs.env.helpArticleUrl;
      break;

    case "admin area":
      visitUrl = configs.env.adminArea;
      break;
    default:
      throw new Error(`Unknown url: ${url}`);
  }
  cy.visit(visitUrl);
});

Cypress.Commands.add("login", (user) => {
  let userName, password;

  switch (user.toLowerCase()) {
    case "admin":
      userName = configs.testData.adminUsername;
      password = configs.testData.defaultPassword;
      break;

    case "manager":
      userName = configs.testData.managerUsername;
      password = configs.testData.defaultPassword;
      break;

    case "employee":
      userName = configs.testData.employeeUsername;
      password = configs.testData.defaultPassword;

      break;

    default:
      throw new Error(`Invalid User: ${user}`);
  }

  cy.xpath(po.userNameField()).type(userName);
  cy.xpath(po.passwordField()).type(password);
  cy.wait(2000);
  cy.xpath(po.button("Log In"), { timeout: 20000 }).debug().click();
});

Cypress.Commands.add("verifyMetaTitle", (title) => {
  cy.title().should("eq", title);
});
