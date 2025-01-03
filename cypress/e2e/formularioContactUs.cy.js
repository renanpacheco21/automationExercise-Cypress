import { faker } from "@faker-js/faker";

describe("Casos de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
  });

  it("Preenche formulário contact us com anexo", () => {
    cy.contains("Contact us").should("be.visible").click();
    cy.contains("Get In Touch");
    cy.get('[data-qa="name"]').type(faker.person.fullName());
    cy.get('[data-qa="email"]').type(faker.internet.email());
    cy.get('[data-qa="subject"]').type(faker.book.title());
    cy.get('[data-qa="message"]').type(faker.lorem.paragraph());
    cy.get('input[name="upload_file"]')
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should(function ($input) {
        expect($input[0].files[0].name).to.equal("example.json");
      });
    cy.contains("Submit").should("be.visible").click();
    cy.contains("Success! Your details have been submitted successfully.");
    cy.get("span").click();
  });
});
