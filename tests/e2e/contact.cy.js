describe("Contact info tests", () => {
  it("a link to email the company should exist on the page", () => {
    cy.visit("/");
    cy.get("a").contains("Contact Us");
  });
});
