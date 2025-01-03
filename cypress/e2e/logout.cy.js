describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("4 - Logout correto", () => {
    const user_name = Cypress.env("user_name");

    cy.login();
    cy.contains(`Logged in as ${user_name}`);
    cy.contains("Logout").should("be.visible").click();
    cy.location("pathname", { timeout: 1000 }).should("eq", "/login");
  });
});
