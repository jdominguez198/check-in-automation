import { getRandomNumber } from '../utils';

describe('Request an Exit action', () => {
  it('Add a Presence Exit action', () => {
    cy.visitLogin();
    cy.login(
      'test', // Cypress.env('USERNAME'),
      'test', // Cypress.env('PASSWORD')
    );
    cy.wait(getRandomNumber(1500, 3000));
    // cy.visitEntries();
    cy.wait(getRandomNumber(1500, 3000));
    // cy.clickOnExitButton();
    cy.wait(getRandomNumber(1500, 3000));
    // cy.logout();
  });
});
