describe('Navbar', () => {

    describe('Navigation between pages', () => {
        it('Visits the initial project page', () => {
            cy.visit('/');
        });
        
        it('Visit the verbs page', () => {
            cy.get('[data-testid="verbsLinkPage"').click();
            cy.url().should('eq', 'http://localhost:4200/verbs');
        });
    
        it('Return to the home page', () => {
            cy.get('[data-testid="homeLinkPage"]').click();
            cy.url().should('eq', 'http://localhost:4200/')
        });
    });

    
});