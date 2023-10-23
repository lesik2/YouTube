/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />
// @ts-check
describe('searchFilm component', () => {
    it('show films that was found after clicking on search button', () => {
        cy.visit('/');
        cy.get('[data-cy="search-input"]').type('Sp').should('have.value', 'Sp');
        cy.get('[data-cy="submit"]').click();
        cy.get('.film-wrapper>div').should('have.length.greaterThan', 0);
        cy.get('[data-cy="search-input"]').should('have.value', 'Sp');
    });
    it('show message nothing found', () => {
        cy.visit('/');
        cy.get('[data-cy="search-input"]').type('qw').should('have.value', 'qw');
        cy.get('[data-cy="submit"]').click();
        cy.contains('Nothing was found');
        cy.contains('Try another request');
        cy.get('[data-cy="search-input"]').should('have.value', 'qw');
    });
    it('show elastic search when typing', () => {
        cy.visit('/');
        cy.get('[data-cy="search-input"]').type('spid');
        cy.get('[data-cy="elastic-search"').should('exist');
    });
    it('search for film after clicking on list from elastic search', () => {
        cy.visit('/');
        cy.get('[data-cy="search-input"]').type('spid');
        cy.get('[data-cy="0-list"]').click();
        cy.get('.film-wrapper>div').should('have.length.greaterThan', 0);
        cy.get('[data-cy="elastic-search"').should('not.exist');
        cy.get('[data-cy="search-input"]').should('have.value', 'spid');
    });
});
