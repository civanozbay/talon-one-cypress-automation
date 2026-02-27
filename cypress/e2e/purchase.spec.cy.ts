import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import {
  name,
  country,
  city,
  creditCard,
  month,
  year,
} from "../fixtures/orderInputs.json";

describe("Purchase Flow", () => {
  const homePage = new HomePage();
  const productDetailPage = new ProductDetailPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Successful Laptop Purchase", () => {
    homePage.selectLaptopCategory().getProduct("MacBook air");

    cy.location("pathname").should("equal", "/prod.html");

    productDetailPage.addToCartBtn().should("be.visible").click();
    cy.verifyAlertText("Product added.");

    homePage.openCart();
    cy.location("pathname").should("equal", "/cart.html");

    cartPage.openPlaceOrder();
    cy.fixture("orderInputs").then((inputs) => {
      cartPage.fillAndPlaceOrder(inputs);
    });
    cartPage.verifySuccessFields();
  });

  it("test", () => {
    //   Negative / Edge Cases:
    // •	Place order with empty fields → validation
    // •	Add multiple products to cart → quantity check
    // •	Invalid credit card → alert
  });
});
