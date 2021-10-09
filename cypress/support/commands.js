/**
 * Access to login Form url
 */
Cypress.Commands.add('visitLogin', () => {
  cy.viewport(1024, 768);
  cy.visit(Cypress.env('LOGIN_URL'));
});

/**
 * Log in using the form with username and password
 */
Cypress.Commands.add('login', (username, password) => {
  const stubAlert = cy.stub();
  cy.on('window:alert', stubAlert);

  cy.get('#usuario')
    .invoke('val', username)
    .trigger('change');
  cy.get('#password')
    .invoke('val', password)
    .trigger('change');
  // cy.get('#entrar')
  //   .click()
  //   .then(() => {
  //     expect(stubAlert).to.not.be.called;
  //   });
});

/**
 * Access to 'Entries' section
 */
Cypress.Commands.add('visitEntries', () => {

});

/**
 * Click on 'Entry' button inside 'Entries' section
 */
Cypress.Commands.add('clickOnEntryButton', () => {

});

/**
 * Click on 'Exit' button inside 'Entries' section
 */
Cypress.Commands.add('clickOnExitButton', () => {

});

/**
 * Log out using 'logout' link
 */
Cypress.Commands.add('logout', () => {
  cy.get('#search .salir')
    .click();
  cy.url().should('eq', Cypress.env('LOGIN_URL'));
});
