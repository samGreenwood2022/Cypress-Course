/// <reference types="cypress" />
// this is a Cypress test suite for navigating to the Dyson Manufacturer Homepage and verifying various elements on the page
// this is deliberately written as an optimised flat file without using page objects

describe('Navigate to Dyson Manufacturer Homepage', () => {
  beforeEach('should navigate to the homepage successfully', () => {
    const searchField = '[data-cy="searchFieldSearch"]';
    const tabCategory = '[data-cy="tabCategory"]';
    const dysonTile = '[title="View Dyson"]';
    // go to the baseUrl homepage
    cy.visit('/');
    // check we landed on the right page
    cy.url()
      .should('eq', 'https://source.thenbs.com/en/gb')
    // click the visible search box
    cy.get(searchField)
      .filter(':visible')
      .click({ timeout: 10000 });
    // type 'dyson' into the search box and hit enter
    cy.get(searchField)
      .filter(':visible')
      .type('dyson{enter}', { timeout: 10000 });
    // switch to the Manufacturers tab
    cy.get(tabCategory)
      .contains('Manufacturers')
      .click({ timeout: 10000 });
    // click the Dyson result tile
    cy.get(dysonTile)
      .click({ timeout: 10000 });
    // confirm we're on the Dyson page
    cy.url()
      .should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview', { timeout: 10000 });
  });
  
  // test 01 - assert the h1 header is correct
  it('the h1 header is correct', () => {
    const h1Header = 'h1';
    // check the h1 header is visible and has the correct text
    cy.get(h1Header)
      .should('be.visible')
      .and('have.text', 'Dyson');
  });
  // test 02 - assert the h1 header paragraph is correct
  it('the h1 header paragraph is correct', () => {
    const h1HeaderParagraph = '.brand-title-container + p';
    // check the h1 header paragraph is visible and has the correct text
    cy.get(h1HeaderParagraph)
      .should('be.visible')
      .and('have.text', 'Technology for business');
  });
  // test 03 - assert the telephone number is correct
  it('the telephone number is correct', () => {
    const telephoneNumber = 'a[action="telephone"]';
    // check the telephone number is visible and has the correct text and href attribute
    cy.get(telephoneNumber)
      .should('be.visible')
      .and('include.text', '08003457788')
      .and('have.attr', 'href', 'tel:08003457788');
  });
  // test 04 - check the dyson website link
  it("check the dyson website link", () => {
    const companyWebsiteLink = cy.get('a[action="company-website"]');
    // check the company website link is visible and has the correct text, href, target, and title attributes
    companyWebsiteLink.should("have.text", " Website ");
    companyWebsiteLink.should(
      "have.attr",
      "href",
      "https://www.dyson.co.uk/commercial/overview",
    );
    companyWebsiteLink.should("have.attr", "target", "_blank");
    companyWebsiteLink.should("be.visible");
    companyWebsiteLink.should(
      "have.attr",
      "title",
      "Visit https://www.dyson.co.uk/commercial/overview",
    );
  });
  // test 05 - check the contact manufacturer button
  it("check the contact manufacturer button", () => {
    const contactManufacturerButton = cy.get("button.contact-button");
    // check the contact manufacturer button is visible and has the correct text
    contactManufacturerButton.should("have.text", " Contact manufacturer ");
    contactManufacturerButton.should("be.visible");
  });
});
 
