beforeEach(() => {
    cy.visit('http://localhost:3000');
});

describe('The Shop Page', () => {
    it('shows the expected number of results', () => {
        const expectedCount = 20;

        cy.get('.product-list > .product-list-item').its('length').should('eq', expectedCount);

        cy.get('.results-count').contains(`${expectedCount} Results`);
    });

    it('shows sold items by default', () => {
        const expectedSoldItemsCount = 9;

        cy.get('.btn-toggle-sold-items').contains('Hide Sold Items');

        cy.get('.product-list-item-sold').should('have.length', expectedSoldItemsCount);
    });

    it('hides and shows sold items when the toggle is clicked', () => {
        const expectedSoldItemsCount = 9;

        cy.get('.btn-toggle-sold-items').click();

        cy.get('.product-list-item-sold').should('have.length', 0);

        cy.get('.btn-toggle-sold-items').click();

        cy.get('.product-list-item-sold').should('have.length', expectedSoldItemsCount);
    });

    it('has no liked products when the page loads', () => {
        cy.get('.btn-toggle-likes-modal').contains('0');

        cy.get('.btn-toggle-likes-modal').click();

        cy.get('.liked-products-modal').contains('No liked products.');
    });

    it('allows users to add and remove liked products', () => {
        const firstProductListItemName = 'Refined Plastic Chair';

        cy.get('.btn-like-product').first().click();

        cy.get('.btn-toggle-likes-modal').contains('1');

        cy.get('.btn-toggle-likes-modal').click();

        cy.get('.liked-products-modal').contains(firstProductListItemName);

        cy.get('.liked-products-modal .btn-modal-unlike-product').click();

        cy.get('.btn-toggle-likes-modal').contains('0');

        cy.get('.liked-products-modal').contains('No liked products.');
    });
});
