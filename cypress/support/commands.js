import { locales } from '../utils/locales';

/**
 * Get site language from html tag
 */
Cypress.Commands.add('getHtmlLang', () => {
  let language = 'es';

  cy.get('html')
    .invoke('attr', 'lang')
    .then(lang => {
      language = lang;
    });

  return cy.wrap(language);
});

/**
 * Access to login Form url
 */
Cypress.Commands.add('visitLogin', (loginUrl) => {
  cy.viewport(1024, 768);
  cy.visit(loginUrl);
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
  cy.get('#entrar')
    .click()
    .then(() => {
      expect(stubAlert).to.not.be.called;
    });
});

/**
 * Access to 'Check-in' section
 */
Cypress.Commands.add('navigateToCheckInSection', (language = 'es') => {


  cy.get('#submenu > ul > li')
    .eq(0)
    .within(() => {
      cy.get('p')
        .should('contain.text', locales[language].checkInSectionLabel)
      ;
    })
    .click();
});

/**
 * Click on 'Entry' button inside 'Entries' section
 */
Cypress.Commands.add('clickOnEntranceButton', (language = 'es') => {
  cy.get('#content .formulario .fichaje .item_elemento')
    .eq(0)
    .should('contain.text', locales[language].entranceButtonLabel)
    .click()
  ;
});

/**
 * Click on 'Exit' button inside 'Entries' section
 */
Cypress.Commands.add('clickOnExitButton', (language = 'es') => {
  cy.get('#content .formulario .fichaje .item_elemento')
    .eq(1)
    .should('contain.text', locales[language].exitButtonLabel)
    .click()
  ;
});

/**
 * Log out using 'logout' link
 */
Cypress.Commands.add('doLogout', (loginUrl) => {
  cy.get('#search .salir')
    .click();
  cy.url().should('eq', loginUrl);
});

/**
 * Combine the access to the login form page and the login action using the form
 */
Cypress.Commands.add('doLoginWith', (username, password, loginUrl) => {
  cy.visitLogin(loginUrl);
  cy.login(username, password);
});

/**
 * Access to the Check-in section and click on the Entrance request
 */
Cypress.Commands.add('makeEntranceRequest', (language = 'es') => {
  cy.navigateToCheckInSection(language);
  cy.clickOnEntranceButton(language);
});

/**
 * Access to the Check-in section and click on the Exit request
 */
Cypress.Commands.add('makeExitRequest', (language = 'es') => {
  cy.navigateToCheckInSection(language);
  cy.clickOnExitButton(language);
});
