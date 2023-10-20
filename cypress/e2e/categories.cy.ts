/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />
// @ts-check
describe('searchFilm component', () => {
    it('categories have 7 links', () => {
        cy.visit('/');
        cy.get('[data-cy="categories"]>a').should('have.length', 7);
    });
    it('changes active link', () => {
        cy.visit('/');
        cy.get('[data-cy="all-link"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
        for (let i = 0; i < 5; i++) {
            cy.get(`[data-cy=${i}-category]`).should('have.css', 'background-color', 'rgb(240, 240, 240)');
        }
        cy.get('[data-cy="0-category"]').click();
        cy.get('[data-cy="0-category"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
        cy.get('[data-cy="all-link"]').should('have.css', 'background-color', 'rgb(240, 240, 240)');
        cy.get('.film-wrapper>div').should('have.length', 16);
    });
});
