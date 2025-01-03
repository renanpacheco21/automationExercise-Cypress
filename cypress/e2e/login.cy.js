import { faker } from "@faker-js/faker";

describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("2 - Login com email e senha corretos", () => {
    const user_name = Cypress.env("user_name");
    
    cy.login();
    cy.contains(`Logged in as ${user_name}`);
  });

  it("3 - Login com email e senha incorretos", () => {
    cy.login(faker.internet.exampleEmail(), faker.internet.password());
    cy.contains("Your email or password is incorrect!");
  });
});
