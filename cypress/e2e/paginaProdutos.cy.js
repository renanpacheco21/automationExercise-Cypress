import { faker } from "@faker-js/faker";

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
    cy.acessProducts();
    cy.searchProducts("T-Shirt");
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

  it("18 - Verifica categoria dos produtos", () => {
    cy.contains("Category");
    cy.contains("Women").click();
    cy.contains("Dress").click();
    cy.contains("Women - Dress Products");
    cy.contains("Men").click();
    cy.contains("Jeans").click();
    cy.contains("Men - Jeans Products");
  });

  it("19 - Verifica marca dos produtos", () => {
    const brand = "Polo";
    const newBrand = "Madame";

    cy.acessProducts();
    cy.contains(brand).should("be.visible").click();
    cy.contains(`Brand - ${brand} Products`);
    cy.contains(newBrand).should("be.visible").click();
    cy.location("pathname", { timeout: 1000 }).should(
      "eq",
      `/brand_products/${newBrand}`
    );
  });

  it("20 - Pesquisa produtos e verifica o carrinho após o login", () => {
    const product = "T-Shirt";

    cy.acessProducts();
    cy.searchProducts(product);
    cy.addProductToCart();
    cy.login();
    cy.contains("Cart").should("be.visible").click();
    cy.contains(product);
  });

  it("21 - Adiciona comentário no produto", () => {
    cy.acessProducts();
    cy.contains("View Product").eq(0).click();
    cy.contains("Write Your Review");
    cy.get("#name").type(faker.person.fullName());
    cy.get("#email").type(faker.internet.email());
    cy.get("#review").type(faker.lorem.paragraph());
    cy.contains("Submit").should("be.visible").click();
    cy.contains("Thank you for your review.");
  });

  it("22 - Adiciona item recomendado ao carrinho", () => {
    cy.scrollTo("bottom");
    cy.contains("recommended items");
    cy.get("#recommended-item-carousel").within(() => {
      cy.get(".add-to-cart").eq(0).click({ force: true });
    });
    cy.contains("View Cart").should("be.visible").click();
    cy.contains("Shopping Cart");
    cy.get("#cart_info").should("have.length.greaterThan", 0);
  });
});
