export class BasePage {
  loginBtnNavbar() {
    return cy.get("#login2");
  }

  welcomeBtnNavbar() {
    return cy.get("#nameofuser");
  }

  logoutBtnNavbar() {
    return cy.get("#logout2");
  }

  homePageBtn() {
    return cy.get("#nava");
  }

  productList() {
    return cy.get("#tbodyid").should("be.visible");
  }

  selectLaptopCategory() {
    cy.contains("#itemc", "Laptops").should("be.visible").click();
    return this;
  }

  cartButtonNavBar() {
    return cy.get("#cartur");
  }

  getProduct(name: string): this {
    cy.contains(".card-title a", name).should("be.visible").click();
    return this;
  }
}
