describe("Program Section tests", () => {
  it("should expand a program when its clicked", () => {
    cy.visit("/");

    cy.contains("Physical Computing").click();
    cy.get(".program--expanded");
  });
});
