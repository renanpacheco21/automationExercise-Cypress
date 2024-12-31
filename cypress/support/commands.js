Cypress.Commands.add(
  "newUser",
  (email = Cypress.env("email"), password = Cypress.env("password")) => {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);
    cy.contains("Signup / Login").click();
    cy.contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type("Renan Pacheco");
    cy.get('[data-qa="signup-email"]').type(email);
    cy.contains("button", "Signup").click();
    cy.contains("Enter Account Information");
    cy.get("#id_gender1").check().should("be.checked");
    cy.get('[data-qa="name"]').should("have.value", "Renan Pacheco");
    cy.get('[data-qa="email"]').should("have.value", email);
    cy.get('[data-qa="password"]').type(password, { log: false });
    cy.get('[data-qa="days"]').select("21").should("have.value", "21");
    cy.get('[data-qa="months"]').select("6").should("have.value", "6");
    cy.get('[data-qa="years"]').select("1993").should("have.value", "1993");
    cy.get("#newsletter").check().should("be.checked");
    cy.get("#optin").check().should("be.checked");
    cy.get('[data-qa="first_name"]')
      .type("Renan")
      .should("have.value", "Renan");
    cy.get('[data-qa="last_name"]')
      .type("Pacheco")
      .should("have.value", "Pacheco");
    cy.get('[data-qa="company"]')
      .type("Cypress")
      .should("have.value", "Cypress");
    cy.get('[data-qa="address"]')
      .type("Avenia Cypress")
      .should("have.value", "Avenia Cypress");
    cy.get('[data-qa="address2"]')
      .type("Num 123")
      .should("have.value", "Num 123");
    cy.get('[data-qa="country"]')
      .select("Canada")
      .should("have.value", "Canada");
    cy.get('[data-qa="state"]')
      .type("British Columbia")
      .should("have.value", "British Columbia");
    cy.get('[data-qa="city"]')
      .type("Vancouver")
      .should("have.value", "Vancouver");
    cy.get('[data-qa="zipcode"]').type("95560").should("have.value", "95560");
    cy.get('[data-qa="mobile_number"]')
      .type("5512341234")
      .should("have.value", "5512341234");
    cy.contains("button", "Create Account").click();
  }
);
