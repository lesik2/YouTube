/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />
// @ts-check
describe('searchFilm component', () => {
    it('show films that was found after clicking on search button', () => {
        cy.visit('/');
        cy.get('[data-cy="search-input"]').type('Spider Man').should('have.value', 'Spider Man');
        cy.get('[data-cy="submit"]').click();
        cy.get('.film-wrapper>div').should('have.length.greaterThan', 0);
        cy.get('[data-cy="search-input"]').should('have.value', '');
    });
    it('show message nothing found', () => {
        cy.visit('/');
        cy.get('[data-cy="search-input"]').type('qwerty').should('have.value', 'qwerty');
        cy.get('[data-cy="submit"]').click();
        cy.contains('Nothing was found');
        cy.contains('Try another request');
        cy.get('[data-cy="search-input"]').should('have.value', '');
    });
});
