import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  openCart() {
    this.cartButtonNavBar().should("be.visible").click();
    return this;
  }
}
