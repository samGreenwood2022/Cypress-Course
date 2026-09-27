/// <reference types="cypress" />
// this is a Cypress test suite for navigating to a Manufacturer Homepage and verifying various elements on the page
// this is written using the page object model: page objects find elements, the assertions live here in the tests

import { SearchResultsPage } from '../pages/search-results-page';
import { ManufacturerHomePage } from '../pages/manufacturer-home-page';

describe('Navigate to Manufacturer Homepage', () => {
  const searchResultsPage = new SearchResultsPage();
  const manufacturerHomePage = new ManufacturerHomePage();

  beforeEach('should navigate to the homepage successfully', () => {
    searchResultsPage.navigateToNBSHomepage();
    cy.location('pathname').should('eq', '/en/gb');

    searchResultsPage.searchFor('dyson');
    searchResultsPage.clickManufacturerTab();
    searchResultsPage.clickTile();
    cy.location('pathname').should(
      'include',
      '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview',
    );
  });

  it('the h1 header is correct', () => {
    manufacturerHomePage
      .getH1Header()
      .should('be.visible')
      .and('have.text', 'Dyson');
  });

  it('the h1 header paragraph is correct', () => {
    manufacturerHomePage
      .getH1HeaderParagraph()
      .should('be.visible')
      .and('have.text', 'Technology for business');
  });

  it('the telephone number is correct', () => {
    manufacturerHomePage
      .getTelephoneNumber()
      .should('be.visible')
      .and('include.text', '08003457788')
      .and('have.attr', 'href', 'tel:08003457788');
  });

  it('check the company website link', () => {
    manufacturerHomePage
      .getCompanyWebsiteLink()
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
    manufacturerHomePage
      .getContactManufacturerButton()
      .should('be.visible')
      .and('have.text', ' Contact manufacturer ');
  });
});
