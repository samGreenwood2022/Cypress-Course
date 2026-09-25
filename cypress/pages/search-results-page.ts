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
  // store reusable actions and assertions here, using the locators above
  // ==========================================================================

  // click the manufacturer tab
  clickManufacturerTab() {
    cy.get(this.tabCategory)
      .contains("Manufacturers")
      .click({ timeout: 10000 });
  }

  // click the Dyson result tile
  clickDysonTile() {
    cy.get(this.dysonTile).click({ timeout: 10000 });
    cy.url().should(
      "include",
      "/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview",
      { timeout: 10000 },
    );
  }
}
