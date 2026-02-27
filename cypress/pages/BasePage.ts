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

  selectLaptopCategory() {
    cy.contains("#itemc", "Laptops").should("be.visible").click();
    return this;
  }

  cartButtonNavBar() {
    return cy.get("#cartur");
  }

  getProduct(name: string): void {
    cy.contains(".card-title a", name).should("be.visible").click();
  }
}
