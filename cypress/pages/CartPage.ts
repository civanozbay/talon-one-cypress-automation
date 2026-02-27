import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  placeOrderBtn() {
    return cy.get('[data-target="#orderModal"]');
  }

  nameInput() {
    return cy.get("#name");
  }

  countryInput() {
    return cy.get("#country");
  }

  cityInput() {
    return cy.get("#city");
  }

  cardInput() {
    return cy.get("#card");
  }

  monthInput() {
    return cy.get("#month");
  }

  yearInput() {
    return cy.get("#year");
  }

  purchaseBtn() {
    return cy.contains(".btn-primary", "Purchase");
  }

  successPopup() {
    return cy.get("p.lead.text-muted");
  }

  productsTable() {
    cy.get("#tbodyid").should("be.visible");
    return this;
  }

  totalAmountInCart() {
    return cy.get("#totalp");
  }

  totalAmountInForm() {
    cy.get("#totalm").should("be.visible");
    return this;
  }

  /**
   * Stabilized typing helper to prevent flaky input behavior.
   * Verifies visibility, enabled state, and final input value.
   */
  private safeType(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    value: string
  ) {
    element
      .should("be.visible")
      .and("not.be.disabled")
      .clear()
      .type(value)
      .should("have.value", value);
  }

  /**
   * Fill checkout form and submit
   * @param fields - Checkout fields
   */
  fillAndPlaceOrder(fields: {
    name: string;
    country: string;
    city: string;
    creditCard: string;
    month: string;
    year: string;
  }): this {
    this.safeType(this.nameInput(), fields.name);
    this.safeType(this.countryInput(), fields.country);
    this.safeType(this.cityInput(), fields.city);
    this.safeType(this.cardInput(), fields.creditCard);
    this.safeType(this.monthInput(), fields.month);
    this.safeType(this.yearInput(), fields.year);

    this.purchaseBtn().click();

    return this; // chainable
  }

  openPlaceOrder() {
    this.placeOrderBtn().should("be.visible").click();
    return this;
  }

  verifySuccessFields() {
    this.successPopup()
      .should("be.visible")
      .within(() => {
        ["Id:", "Amount:", "Card Number:", "Name:", "Date:"].forEach(
          (label) => {
            cy.contains(label).should("be.visible");
          }
        );
      });
    return this;
  }

  verifyTotalAmount() {
    this.totalAmountInCart()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const total = parseInt(text.trim());
        expect(total).to.be.a("number").and.to.be.greaterThan(0);
      });
    return this;
  }
}
