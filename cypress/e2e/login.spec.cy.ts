import { LoginPage } from "../pages/LoginPage";

describe("Login Cases", () => {
  const loginPage = new LoginPage();
  it("Login with valid existing user", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
    loginPage
      .welcomeBtnNavbar()
      .should("be.visible")
      .invoke("text")
      .should("equal", "Welcome " + Cypress.env("username"));
  });

  it("Login with invalid password", () => {
    cy.login("test", "test1234");
    cy.verifyAlertText("Wrong password.");
  });

  it("Login with user which doesn't exist", () => {
    cy.login("qa engineer", "*****************");
    cy.verifyAlertText("User does not exist.");
  });

  it("Login with empty username and password", () => {
    cy.visit("/");
    loginPage.loginButtonNavbar().click();
    loginPage.usernameField().should("be.visible");
    loginPage.loginButton().click();

    cy.verifyAlertText("Please fill out Username and Password.");
  });
});
