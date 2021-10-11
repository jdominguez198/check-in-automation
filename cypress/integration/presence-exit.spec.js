import { getRandomNumber } from '../utils/utilities';

describe('Request an Exit action', () => {
  it('Add a Presence Exit action', () => {
    let language = 'es';
    cy.getHtmlLang().then(lang => language = lang);

    cy.doLoginWith(
      Cypress.env('USERNAME'),
      Cypress.env('PASSWORD'),
      Cypress.env('LOGIN_URL')
    );
    cy.wait(getRandomNumber(1500, 6000));
    cy.clickCheckInButton('exit', language);
    cy.wait(getRandomNumber(1500, 6000));
    cy.doLogout(Cypress.env('LOGIN_URL'));
  });
});
