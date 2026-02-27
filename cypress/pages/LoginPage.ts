import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  usernameField() {
    return cy.get("#loginusername", { timeout: 10000 });
  }

  passwordField() {
    return cy.get("#loginpassword");
  }

  loginButton() {
    return cy.contains(".btn-primary", "Log in");
  }

  loginModal() {
    return cy.get("#logInModal");
  }
}
