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

import { LoginPage } from "../pages/LoginPage";

Cypress.Commands.add("login", (username: string, password: string) => {
  const loginPage = new LoginPage();
  cy.visit("/");
  const log = Cypress.log({
    name: "login",
    displayName: "LOGIN",
    // @ts-ignore
    autoEnd: false,
  });

  cy.intercept("POST", "https://api.demoblaze.com/login").as("loginUser");

  loginPage.loginBtnNavbar().click();
  loginPage.usernameField().should("be.visible").and("be.enabled");
  loginPage.usernameField().clear().type(username, { delay: 200 });
  loginPage.passwordField().type(password);
  loginPage.loginButton().click();

  cy.wait("@loginUser").then((loginUser: any) => {
    log.set({
      consoleProps() {
        return {
          username,
          password,
        };
      },
    });
  });
});

Cypress.Commands.add("verifyAlertText", (alertText: string) => {
  cy.on("window:alert", (text) => {
    expect(text).to.equal(alertText);
  });
});
