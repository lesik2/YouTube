/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />
// @ts-check
describe('e2e tests', () => {
    it('passes', () => {
        cy.visit('/');
        cy.get('[type="checkbox"]').uncheck({ force: true });
        cy.get('button').should('have.text', 'Show More');
        cy.get('[data-cy="search-input"]').type('Spider Man').should('have.value', 'Spider Man');
        cy.get('[data-cy="submit"]').click();
        cy.get('.film-wrapper div').should('have.length.greaterThan', 0);
        cy.get('[data-cy="search-input"]').should('have.value', '');
        cy.get('[data-cy="search-input"]').type('qwerty').should('have.value', 'qwerty');
        cy.get('[data-cy="submit"]').click();
        cy.contains('Nothing was found');
        cy.contains('Try another request');
        cy.get('[data-cy="search-input"]').should('have.value', '');
    });
    it('changes background color', () => {
        cy.visit('/');
        cy.get('[data-cy="main-page"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');

        cy.get('[type="checkbox"]').click({ force: true });

        // check the background color has been changed
        cy.get('[data-cy="main-page"]').should('have.css', 'background-color', 'rgb(35, 39, 47)');
        cy.get('[type="checkbox"]').click({ force: true });
        cy.get('[data-cy="main-page"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
});
