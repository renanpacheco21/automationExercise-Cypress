describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });


  it("Login com email e senha corretos", () => {
    cy.login();
  });
});
