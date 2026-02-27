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
    homePage.selectLaptopCategory().productList().getProduct("MacBook air");

    cy.location("pathname").should("equal", "/prod.html");

    productDetailPage.addToCartBtn().should("be.visible").click();
    cy.verifyAlertText("Product added.");

    homePage.openCart();
    cy.location("pathname").should("equal", "/cart.html");

    cartPage.verifyTotalAmount();

    cartPage.openPlaceOrder();
    cy.fixture("orderInputs").then((inputs) => {
      cartPage.fillAndPlaceOrder(inputs);
    });
    cartPage.verifySuccessFields();
  });

  it("Place order with empty fields", () => {
    homePage.selectLaptopCategory().productList().getProduct("MacBook Pro");

    cy.location("pathname").should("equal", "/prod.html");

    productDetailPage.addToCartBtn().should("be.visible").click();

    homePage.openCart();
    cy.location("pathname").should("equal", "/cart.html");
    cartPage.verifyTotalAmount();

    cartPage
      .productsTable()
      .openPlaceOrder()
      .totalAmountInForm()
      .purchaseBtn()
      .click();

    cy.verifyAlertText("Please fill out Name and Creditcard.");
  });

  it("Add multiple orders to cart", () => {
    homePage.selectLaptopCategory().productList().getProduct("MacBook Pro");

    cy.location("pathname").should("equal", "/prod.html");

    productDetailPage.addToCartBtn().should("be.visible").click();
    cy.verifyAlertText("Product added.");

    homePage.homePageBtn().click();
    homePage.selectLaptopCategory().productList().getProduct("Dell i7 8gb");
    cy.location("pathname").should("equal", "/prod.html");

    productDetailPage.addToCartBtn().should("be.visible").click();
    cy.verifyAlertText("Product added.");

    homePage.openCart();
    cy.location("pathname").should("equal", "/cart.html");
    cartPage.verifyTotalAmount();

    cartPage.openPlaceOrder();
    cy.fixture("orderInputs").then((inputs) => {
      cartPage.fillAndPlaceOrder(inputs);
    });
    cartPage.verifySuccessFields();
  });
});
