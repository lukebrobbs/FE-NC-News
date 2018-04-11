describe("Home page", () => {
  it("Should contain correct headings", () => {
    cy.visit("http://gracious-hamilton-a1fd6e.netlify.com/");
    cy.contains("/home");
    cy.contains("Hot articles");
  });
  it("Should render search results when search bar is filled in", () => {
    cy.get("textarea").type("The");
    cy.get(".article-snippet").contains("submitted by");
  });
  it("Should render a selection of articles", () => {
    cy.get(".voter p").should($p => {
      expect($p).to.be.a("number");
    });
  });
  it("Should have funcional links", () => {
    cy.contains("Random").click({ force: true });
    cy.url().should("include", "/topics");
  });
});
