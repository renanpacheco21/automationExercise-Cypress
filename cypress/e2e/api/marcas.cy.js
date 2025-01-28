describe("Casos de testes Automation Exercise API", () => {
  it("3 - GET - Todas marcas da lista", () => {
    cy.request({
      method: "GET",
      url: `api/brandsList`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("4 - PUT - Todas marcas da lista (Não permitido)", () => {
    cy.request({
      method: "PUT",
      url: `api/productsList`,
      failOnStatusCode: false,
    }).then((response) => {
      const responseBody = JSON.parse(response.body);

      expect(responseBody).to.include({
        responseCode: 405,
        message: "This request method is not supported.",
      });
    });
  });
});
