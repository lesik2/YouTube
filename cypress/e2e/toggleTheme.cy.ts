/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />
// @ts-check
describe('ToggleTheme Component', () => {
    it('change state of checkbox(check/uncheck)', () => {
        cy.visit('/');
        cy.get('[type="checkbox"]').uncheck({ force: true });
        cy.get('[type="checkbox"]').click({ force: true });
        cy.get('[type="checkbox"]').check({ force: true });
    });
    it('changes background color', () => {
        cy.visit('/');
        cy.get('[data-cy="main-page"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');

        cy.get('[type="checkbox"]').click({ force: true });

        cy.get('[data-cy="main-page"]').should('have.css', 'background-color', 'rgb(35, 39, 47)');
        cy.get('[type="checkbox"]').click({ force: true });
        cy.get('[data-cy="main-page"]').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
});
