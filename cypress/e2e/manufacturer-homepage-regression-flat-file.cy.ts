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
    cy.location('pathname').should('eq', '/en/gb');
    // type 'dyson' into the visible search box and hit enter
    cy.get(searchField).filter(':visible').type('dyson{enter}');
    // switch to the Manufacturers tab
    cy.get(tabCategory).contains('Manufacturers').click();
    // click the Dyson result tile
    cy.get(dysonTile).click();
    // confirm we're on the Dyson page
    cy.location('pathname').should(
      'include',
      '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview',
    );
  });

  it('the h1 header is correct', () => {
    const h1Header = 'h1';
    // check the h1 header is visible and has the correct text
    cy.get(h1Header).should('be.visible').and('have.text', 'Dyson');
  });

  it('the h1 header paragraph is correct', () => {
    const h1HeaderParagraph = '.brand-title-container + p';
    // check the h1 header paragraph is visible and has the correct text
    cy.get(h1HeaderParagraph)
      .should('be.visible')
      .and('have.text', 'Technology for business');
  });

  it('the telephone number is correct', () => {
    const telephoneNumber = 'a[action="telephone"]';
    // check the telephone number is visible and has the correct text and href attribute
    cy.get(telephoneNumber)
      .should('be.visible')
      .and('include.text', '08003457788')
      .and('have.attr', 'href', 'tel:08003457788');
  });

  it('check the dyson website link', () => {
    const companyWebsiteLink = 'a[action="company-website"]';
    // check the company website link is visible and has the correct text, href, target, and title attributes
    cy.get(companyWebsiteLink)
      .should('be.visible')
      .and('have.text', ' Website ')
      .and('have.attr', 'href', 'https://www.dyson.co.uk/commercial/overview')
      .and('have.attr', 'target', '_blank')
      .and(
        'have.attr',
        'title',
        'Visit https://www.dyson.co.uk/commercial/overview',
      );
  });

  it('check the contact manufacturer button', () => {
    const contactManufacturerButton = 'button.contact-button';
    // check the contact manufacturer button is visible and has the correct text
    cy.get(contactManufacturerButton)
      .should('be.visible')
      .and('have.text', ' Contact manufacturer ');
  });
});
