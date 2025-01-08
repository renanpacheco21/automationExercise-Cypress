describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("14 - Registra novo usuário na página de pedidos", () => {
    cy.get('[data-product-id="1"]').eq(0).click();
    cy.contains("Continue Shopping").should("be.visible").click();
    cy.contains("Cart").should("be.visible").click();
    cy.contains("Shopping Cart").should("be.visible");
    cy.contains("Proceed To Checkout").should("be.visible").click();
    cy.get(".modal-body > :nth-child(2) > a > u").should("be.visible").click();
    cy.createUser();
    cy.contains("Cart").should("be.visible").click();
    cy.proceedCheckout();
    cy.paymentDetails();
    cy.deleteUser();
  });

  it.only("15 - Registra novo usuário antes de fazer pedidos", () => {
    cy.createUser();
    cy.get('[data-product-id="1"]').eq(0).click();
    cy.contains("Continue Shopping").should("be.visible").click();
    cy.contains("Cart").should("be.visible").click();
    cy.contains("Shopping Cart").should("be.visible");
    cy.proceedCheckout();
    cy.paymentDetails();
    cy.deleteUser();
  });
});
