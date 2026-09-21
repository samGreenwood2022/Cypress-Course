describe('Navigate to Dyson Manufacturer Homepage', () => {
  it('should navigate to the homepage successfully', () => {
    cy.visit('/');
    // Page URL changed.
    cy.url()
      .should('eq', 'https://source.thenbs.com/en/gb')
    cy.get('[data-cy="searchFieldSearch"]').filter(':visible').click( {timeout: 10000});
    cy.get('[data-cy="searchFieldSearch"]').filter(':visible').type('dyson{enter}', {timeout: 10000} );
    cy.get('[data-cy="tabCategory"]').contains('Manufacturers').click( {timeout: 10000});
    cy.get('[title="View Dyson"]').click( {timeout: 10000});
    cy.url().should('include', '/manufacturer/dyson/nakAxHWxDZprdqkBaCdn4U/overview');
    
    
  });
});