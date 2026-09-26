/// <reference types="cypress" />
// BasePage holds the locators and methods shared by every page in the app
// other page objects should extend this class, e.g. `class HomePage extends BasePage`

export class BasePage {

  // ==========================================================================
  // LOCATORS
  // store selectors here as readonly properties so they are defined once
  // ==========================================================================

  readonly searchField = '[data-cy="searchFieldSearch"]';

  // ==========================================================================
  // METHODS
  // store reusable actions and element getters here, using the locators above
  // assertions belong in the spec files
  // ==========================================================================

  // navigate to nbs source homepage
  navigateToNBSHomepage() {
    cy.visit('/');
  }

  // type a search term into the visible search box and hit enter
  searchFor(term: string) {
    cy.get(this.searchField)
      .filter(':visible')
      .type(`${term}{enter}`, { timeout: 10000 });
  }
}
