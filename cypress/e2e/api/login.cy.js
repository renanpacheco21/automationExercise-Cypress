describe("API Login Verification", () => {
  it("10 - POST - Verifica login inválido", () => {
    cy.request({
      method: "POST",
      url: "api/verifyLogin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        email: "invalid_email@example.com",
        password: "invalid_password",
      },
    }).then((response) => {
      const responseBody = JSON.parse(response.body);

      expect(responseBody).to.include({
        responseCode: 404,
        message: "User not found!",
      });
    });
  });
});
