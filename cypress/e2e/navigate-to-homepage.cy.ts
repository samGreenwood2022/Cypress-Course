describe('Navigate to Dyson Manufacturer Homepage', () => {
  it('should navigate to the homepage successfully', () => {
    // go to the baseUrl homepage
    cy.visit('/');
    // check we landed on the right page
    cy.url()
      .should('eq', 'https://source.thenbs.com/en/gb')
    // click the visible search box
    cy.get('[data-cy="searchFieldSearch"]')
      .filter(':visible')
      .click({ timeout: 10000 });
    // type 'dyson' into the search box and hit enter
    cy.get('[data-cy="searchFieldSearch"]')
      .filter(':visible')
      .type('dyson{enter}', { timeout: 10000 });
    // switch to the Manufacturers tab
    cy.get('[data-cy="tabCategory"]')
      .contains('Manufacturers')
      .click({ timeout: 10000 });
    // click the Dyson result tile
    cy.get('[title="View Dyson"]')
      .click({ timeout: 10000 });
    // confirm we're on the Dyson page
    cy.url()
      .should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview'); // confirm we're on the Dyson page


  });
});