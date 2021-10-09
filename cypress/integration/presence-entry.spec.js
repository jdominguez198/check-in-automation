import { getRandomNumber } from '../utils';

describe('Request an Entry action', () => {
  it('Add a Presence Entry action', () => {
    cy.visitLogin();
    cy.login(
      'test', // Cypress.env('USERNAME'),
      'test', // Cypress.env('PASSWORD')
    );
    cy.wait(getRandomNumber(1500, 3000));
    // cy.visitEntries();
    cy.wait(getRandomNumber(1500, 3000));
    // cy.clickOnEntryButton();
    cy.wait(getRandomNumber(1500, 3000));
    // cy.logout();
  });
});
