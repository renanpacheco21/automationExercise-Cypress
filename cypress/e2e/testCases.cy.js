describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Register user", () => {
    cy.newUser();
  });
});
