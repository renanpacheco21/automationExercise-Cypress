
describe("Casos de testes Automation Exercise", () => {

  beforeEach(() => {
    cy.visit("/");

  });

  it("Register user", () => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type("Renan Pacheco");
    cy.get('[data-qa="signup-email"]').type("teste@testecypress.com.br");
    cy.contains("button", "Signup").click();
  });
});
