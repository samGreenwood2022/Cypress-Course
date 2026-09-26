/// <reference types="cypress" />
// this is a Cypress test suite for navigating to the Dyson Manufacturer Homepage and verifying various elements on the page
// this is deliberately written as an optimised flat file without using page objects

import { BasePage } from '../pages/base-page';
import { SearchResultsPage } from '../pages/search-results-page';
import { ManufacturerHomePage } from '../pages/manufacturer-home-page';

describe('Navigate to Dyson Manufacturer Homepage', () => {
  beforeEach('should navigate to the homepage successfully', () => {
    const basePage = new BasePage();
    const searchResultsPage = new SearchResultsPage();

    basePage.navigateToNBSHomepage();
    basePage.searchFor('dyson');
    searchResultsPage.clickManufacturerTab();
    searchResultsPage.clickTile();
  });
  
  // test 01 - assert the h1 header is correct
  it('the h1 header is correct', () => {
    const manufacturerHomePage = new ManufacturerHomePage();
    manufacturerHomePage.getH1Header('dyson');
  });


  // test 02 - assert the h1 header paragraph is correct
  it('the h1 header paragraph is correct', () => {
    const manufacturerHomePage = new ManufacturerHomePage();
    manufacturerHomePage.getH1HeaderParagraph('Technology for business');
  });

  // test 03 - assert the telephone number is correct
  it('the telephone number is correct', () => {
    const manufacturerHomePage = new ManufacturerHomePage();
    manufacturerHomePage.getTelephoneNumber('08003457788');
    
  });
  // test 04 - check the dyson website link
  it("check the dyson website link", () => {
    const manufacturerHomePage = new ManufacturerHomePage();
    manufacturerHomePage.getCompanyWebsiteLink();
  });

  // test 05 - check the contact manufacturer button
  it("check the contact manufacturer button", () => {
    const manufacturerHomePage = new ManufacturerHomePage();
    manufacturerHomePage.getContactManufacturerButton();
  });
});
 
