import { faker } from "@faker-js/faker";

describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("10 - Verifica o subscription da página home", () => {
    cy.scrollTo("bottom");
    cy.contains("Subscription");
    cy.get("#susbscribe_email").type(faker.internet.email());
    cy.get("#subscribe > .fa").click();
    cy.get(".alert-success").should(
      "have.text",
      "You have been successfully subscribed!"
    );
  });

  it.only("11 - Verifica o subscription da página do carrinho", () => {
    cy.contains("Cart").click();
    cy.scrollTo("bottom");
    cy.contains("Subscription");
    cy.get("#susbscribe_email").type(faker.internet.email());
    cy.get("#subscribe > .fa").click();
    cy.get(".alert-success").should(
      "have.text",
      "You have been successfully subscribed!"
    );
  });
});
