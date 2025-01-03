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
      .and('contain.text', 'Condition')
      .and('contain.text', 'Brand');
    cy.get(".product-information > h2").should('be.visible');
  });
});
