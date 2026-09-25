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
  // store reusable actions and assertions here, using the locators above
  // ==========================================================================

  // get the h1 header element
  getH1Header(h1: string) {
    cy.get(this.h1Header)
      .should('be.visible')
      .and('have.text', h1);
  }

  // get the h1 header paragraph element
  getH1HeaderParagraph(h1paragraph: string) {
    cy.get(this.h1HeaderParagraph)
      .should('be.visible')
      .and('have.text', h1paragraph);
  }

  // get the telephone number element
  getTelephoneNumber(telephone: string) {
    cy.get(this.telephoneNumber)
      .should('be.visible')
      .and('include.text', telephone)
      .and('have.attr', 'href', `tel:${telephone}`);
  }

  // get the company website link element
  getCompanyWebsiteLink() {
    cy.get(this.companyWebsiteLink).should("have.text", " Website ");
    cy.get(this.companyWebsiteLink).should(
      "have.attr",
      "href",
      "https://www.dyson.co.uk/commercial/overview",
    );
    cy.get(this.companyWebsiteLink).should("have.attr", "target", "_blank");
    cy.get(this.companyWebsiteLink).should("be.visible");
    cy.get(this.companyWebsiteLink).should(
      "have.attr",
      "title",
      "Visit https://www.dyson.co.uk/commercial/overview",
    );
  }

  // get the contact manufacturer button element
  getContactManufacturerButton() {
    cy.get(this.contactManufacturerButton)
      .should("have.text", " Contact manufacturer ")
      .and("be.visible");
  }
}