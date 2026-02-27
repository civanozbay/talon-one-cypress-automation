export class ProductDetailPage {
  addToCartBtn() {
    return cy.contains(".btn-success", "Add to cart");
  }
}
