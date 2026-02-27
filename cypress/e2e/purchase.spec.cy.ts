import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";
import { ProductDetailPage } from "../pages/ProductDetailPage";

describe("Purchase Flow", () => {
  const homePage = new HomePage();
  const productDetailPage = new ProductDetailPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Successful Laptop Purchase", () => {
    homePage.laptopCategory().getProduct("MacBook air");

    cy.location("pathname").should("equal", "/prod.html");

    productDetailPage.addToCartBtn().should("be.visible").click();
    cy.verifyAlertText("Product added.");

    homePage.openCart();
    cy.location("pathname").should("equal", "/cart.html");

    cartPage
      .openPlaceOrder()
      .fillAndPlaceOrder({
        name: "Civan",
        country: "Germany",
        city: "Berlin",
        creditCard: "1234 5678 9012 3456",
        month: "02",
        year: "2026",
      })
      .verifySuccessFields();
  });
});
