/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Logs-in user by using UI
     */
    login(username: string, password: string): void;
    /**
     * get product from list with respective title
     */
    getProduct(name: string): Chainable<JQuery<HTMLElement>>;
    /*
     * verify texts in alerts
     */
    verifyAlertText(alertText: string): void;
  }
}
