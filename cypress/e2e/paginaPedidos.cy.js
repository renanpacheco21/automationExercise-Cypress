describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("14 - Registra novo usuário na página de pedidos", () => {
    cy.addProductToCart();
    cy.contains("Proceed To Checkout").should("be.visible").click();
    cy.get(".modal-body > :nth-child(2) > a > u").should("be.visible").click();
    cy.createUser();
    cy.contains("Cart").should("be.visible").click();
    cy.proceedCheckout();
    cy.paymentDetails();
    cy.deleteUser();
  });

  it("15 - Registra novo usuário antes de fazer pedidos", () => {
    cy.createUser();
    cy.addProductToCart();
    cy.proceedCheckout();
    cy.paymentDetails();
    cy.deleteUser();
  });

  it("16 - Realiza login antes de fazer pedidos", () => {
    const user_name = Cypress.env("user_name");

    cy.login();
    cy.contains(`Logged in as ${user_name}`);
    cy.addProductToCart();
    cy.proceedCheckout();
    cy.paymentDetails();
    cy.deleteUser();
  });
});
