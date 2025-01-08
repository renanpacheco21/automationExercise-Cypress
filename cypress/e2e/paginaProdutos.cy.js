describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("8 - Verifica todos os produtos e página de detalhes do produto", () => {
    cy.acessProducts();
    cy.contains("View Product").eq(0).click();
    cy.location("pathname", { timeout: 1000 }).should(
      "eq",
      "/product_details/1"
    );
    cy.get(".product-information")
      .should("contain.text", "Category")
      .and("contain.text", "Availability")
      .and("contain.text", "Condition")
      .and("contain.text", "Brand");
    cy.get(".product-information > h2").should("be.visible");
  });

  it("9 - Pesquisa produto", () => {
    const nameProduct = "T-Shirt";

    cy.acessProducts();
    cy.get("#search_product").type(nameProduct);
    cy.get("#submit_search").click();
    cy.contains("Searched Products");
    cy.contains(".features_items", nameProduct);
  });

  it("12 - Adiciona produtos no carrinho", () => {
    cy.acessProducts();
    cy.get('[data-product-id="1"]').eq(0).click();
    cy.contains("Continue Shopping").should("be.visible").click();
    cy.get('[data-product-id="2"]').eq(0).click();
    cy.contains("View Cart").should("be.visible").click();
    cy.get("#product-1 > .cart_description").should("contain.text", "Blue Top");
    cy.get("#product-1 > .cart_price").should("contain.text", "Rs. 500");
    cy.get("#product-1 > .cart_quantity").should("contain.text", "1");
    cy.get("#product-1 > .cart_total").should("contain.text", "Rs. 500");
    cy.get("#product-2 > .cart_description").should(
      "contain.text",
      "Men Tshirt"
    );
    cy.get("#product-2 > .cart_price").should("contain.text", "Rs. 400");
    cy.get("#product-2 > .cart_quantity").should("contain.text", "1");
    cy.get("#product-2 > .cart_total").should("contain.text", "Rs. 400");
  });

  it("13 - Verifica quantidade do produto no carrinho", () => {
    const quantidade = 4;

    cy.contains("View Product").eq(0).click();
    cy.location("pathname", { timeout: 1000 }).should(
      "eq",
      "/product_details/1"
    );
    cy.get("#quantity")
      .invoke("val", quantidade)
      .should("have.value", quantidade);
    cy.contains("Add to cart").should("be.visible").click();
    cy.contains("View Cart").should("be.visible").click();
    cy.get(".cart_quantity").should("contain.text", quantidade);
  });

  it("17 - Remove produtos do carrinho", () => {
    cy.addProductToCart();
    cy.get(".cart_quantity_delete").should("be.visible").click();
    cy.contains("Cart is empty!");
  });

  it.only("18 - Verifica categoria dos produtos", () => {
    cy.contains("Category");
    cy.contains('Women').click()
    cy.contains("Dress").click();
    cy.contains("Women - Dress Products");
    cy.contains("Men").click();
    cy.contains("Jeans").click();
    cy.contains("Men - Jeans Products");
  });
});
