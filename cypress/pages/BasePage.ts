export class BasePage {
  loginButtonNavbar() {
    return cy.get("#login2");
  }

  welcomeBtnNavbar() {
    return cy.get("#nameofuser");
  }

  logoutBtnNavbar() {
    return cy.get("#logout2");
  }

  laptopCategory() {
    return cy.contains("#itemc", "Laptops");
  }
}
