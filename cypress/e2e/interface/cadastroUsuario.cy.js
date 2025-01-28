import { faker } from "@faker-js/faker";

describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("1 - Registra novo usuário", () => {
    cy.createUser();
    cy.deleteUser();
  });

  it("5 - Registra usuário com email existente", () => {
    const user_email = Cypress.env("user_email");

    cy.contains("Signup / Login").should("be.visible").click();
    cy.contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type(faker.person.fullName());
    cy.get('[data-qa="signup-email"]').type(user_email);
    cy.contains("button", "Signup").should("be.visible").click();
    cy.contains("Email Address already exist!");
  });
});
