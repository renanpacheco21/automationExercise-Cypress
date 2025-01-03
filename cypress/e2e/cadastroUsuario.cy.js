describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1 - Registra novo usuário", () => {
    cy.createUser();
    cy.deleteUser();
  });
});
