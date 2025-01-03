describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("7 - Acessa página Test Cases", () => {
    cy.contains("Test Cases").should("be.visible").click();
    cy.contains(
      "Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:"
    );
  });
});
