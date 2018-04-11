describe("my first test", () => {
  it("Does not do much", () => {
    cy.visit("http://gracious-hamilton-a1fd6e.netlify.com/");
    cy.contains("/home");
    cy.contains("Hot articles");
    cy.contains("Random").click({ force: true });
    cy.url().should("include", "/topics");
  });
});
