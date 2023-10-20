/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />
// @ts-check
describe('filmsContainer component', () => {
    it('filmsContainer have 16 films', () => {
        cy.visit('/');
        cy.get('.film-wrapper>div').should('have.length', 16);
    });
    it('show infinity loader after clicking on Show More button', () => {
        cy.visit('/');
        cy.get('[data-cy="button-films"]').click();
        cy.get('[data-cy="infinity-loader"]').should('be.visible');
        cy.get('[data-cy="infinity-loader"]').should('not.exist');
    });
    it('add 16 films after clicking on Show More button', () => {
        cy.visit('/');
        cy.get('[data-cy="button-films"]').should('have.text', 'Show More');
        cy.get('[data-cy="button-films"]').click();
        cy.get('.film-wrapper>div').should('have.length', 32);
    });
});
