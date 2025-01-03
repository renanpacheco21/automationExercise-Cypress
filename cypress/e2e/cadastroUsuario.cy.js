describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Registra novo usuário", () => {
    cy.createUser();
    cy.deleteUser();
  });
});
