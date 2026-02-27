import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  usernameField() {
    return cy.get("#loginusername");
  }

  passwordField() {
    return cy.get("#loginpassword");
  }

  loginButton() {
    return cy.contains(".btn-primary", "Log in");
  }
}
