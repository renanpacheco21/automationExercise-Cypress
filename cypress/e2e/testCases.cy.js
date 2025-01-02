describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Registrar novo usuário", () => {
    cy.createUser();
    cy.deleteUser();
  });

  it.only("Login com email e senha corretos", () => {
    cy.createUser();
    cy.contains("Logout").should("be.visible").click();
    cy.contains("Home").should("be.visible").click();
    cy.login();
    cy.deleteUser();
  });
});
