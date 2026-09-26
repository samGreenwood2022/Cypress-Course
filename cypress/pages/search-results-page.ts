/// <reference types="cypress" />

import { BasePage } from "./base-page";

export class SearchResultsPage extends BasePage {
  // ==========================================================================
  // LOCATORS
  // store selectors here as readonly properties so they are defined once
  // ==========================================================================

  readonly dysonTile = '[title="View Dyson"]';
  readonly tabCategory = '[data-cy="tabCategory"]';

  // ==========================================================================
  // METHODS
  // store reusable actions and element getters here, using the locators above
  // assertions belong in the spec files
  // ==========================================================================

  // click the manufacturer tab
  clickManufacturerTab() {
    cy.get(this.tabCategory)
      .contains("Manufacturers")
      .click({ timeout: 10000 });
  }

  // click the Dyson result tile
  clickTile() {
    cy.get(this.dysonTile).click({ timeout: 10000 });
  }
}
