describe("Casos de testes Automation Exercise API", () => {
  it("1 - GET - Todos produtos da lista", () => {
    cy.request({
      method: "GET",
      url: `api/productsList`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("2 - POST - Todos produtos da lista (Não permitido)", () => {
    cy.request({
      method: "POST",
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
