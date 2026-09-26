/// <reference types="cypress" />
// this is a Cypress test suite for navigating to the Dyson Manufacturer Homepage and verifying various elements on the page
// this is written using the page object model: page objects find elements, the assertions live here in the tests

import { BasePage } from '../pages/base-page';
import { SearchResultsPage } from '../pages/search-results-page';
import { ManufacturerHomePage } from '../pages/manufacturer-home-page';

describe('Navigate to Dyson Manufacturer Homepage', () => {
  const basePage = new BasePage();
  const searchResultsPage = new SearchResultsPage();
  const manufacturerHomePage = new ManufacturerHomePage();

  beforeEach('should navigate to the homepage successfully', () => {
    basePage.navigateToNBSHomepage();
    basePage.searchFor('dyson');
    searchResultsPage.clickManufacturerTab();
    searchResultsPage.clickTile();
  });

  // test 01 - assert the h1 header is correct
  it('the h1 header is correct', () => {
    manufacturerHomePage.getH1Header()
      .should('be.visible')
      .and('have.text', 'Dyson');
  });

  // test 02 - assert the h1 header paragraph is correct
  it('the h1 header paragraph is correct', () => {
    manufacturerHomePage.getH1HeaderParagraph()
      .should('be.visible')
      .and('have.text', 'Technology for business');
  });

  // test 03 - assert the telephone number is correct
  it('the telephone number is correct', () => {
    manufacturerHomePage.getTelephoneNumber()
      .should('be.visible')
      .and('include.text', '08003457788')
      .and('have.attr', 'href', 'tel:08003457788');
  });

  // test 04 - check the dyson website link
  it('check the dyson website link', () => {
    manufacturerHomePage.getCompanyWebsiteLink()
      .should('be.visible')
      .and('have.text', ' Website ')
      .and('have.attr', 'href', 'https://www.dyson.co.uk/commercial/overview')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'title', 'Visit https://www.dyson.co.uk/commercial/overview');
  });

  // test 05 - check the contact manufacturer button
  it('check the contact manufacturer button', () => {
    manufacturerHomePage.getContactManufacturerButton()
      .should('be.visible')
      .and('have.text', ' Contact manufacturer ');
  });
});
