/// <reference types="cypress" />
import { BasePage } from './base-page';

export class ManufacturerHomePage extends BasePage {
  // ==========================================================================
  // LOCATORS
  // store all element locators here
  // ==========================================================================

  readonly h1Header = 'h1';
  readonly h1HeaderParagraph = '.brand-title-container + p';
  readonly telephoneNumber = 'a[action="telephone"]';
  readonly companyWebsiteLink = 'a[action="company-website"]';
  readonly contactManufacturerButton = 'button.contact-button';

  // ==========================================================================
  // METHODS
  // store reusable element getters and actions here, using the locators above
  // assertions belong in the spec files, chained onto the elements returned here
  // ==========================================================================

  // get the h1 header element
  getH1Header() {
    return cy.get(this.h1Header);
  }

  // get the h1 header paragraph element
  getH1HeaderParagraph() {
    return cy.get(this.h1HeaderParagraph);
  }

  // get the telephone number element
  getTelephoneNumber() {
    return cy.get(this.telephoneNumber);
  }

  // get the company website link element
  getCompanyWebsiteLink() {
    return cy.get(this.companyWebsiteLink);
  }

  // get the contact manufacturer button element
  getContactManufacturerButton() {
    return cy.get(this.contactManufacturerButton);
  }
}