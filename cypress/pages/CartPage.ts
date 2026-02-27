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
    this.nameInput().type(fields.name);
    this.countryInput().type(fields.country);
    this.cityInput().type(fields.city);
    this.cardInput().type(fields.creditCard);
    this.cardInput().type(fields.creditCard);
    this.monthInput().type(fields.month);
    this.yearInput().type(fields.year);

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
        cy.contains("Id:").should("be.visible");
        cy.contains("Amount:").should("be.visible");
        cy.contains("Card Number:").should("be.visible");
        cy.contains("Name:").should("be.visible");
        cy.contains("Date:").should("be.visible");
      });
    return this;
  }
}
