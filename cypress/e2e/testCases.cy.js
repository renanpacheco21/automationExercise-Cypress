describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Registrar novo usuário", () => {
    cy.createUser();
    cy.deleteUser();
  });
});
