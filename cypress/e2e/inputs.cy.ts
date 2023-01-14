describe('template spec', () => {
  // it('home', () => {
  //   cy.visit('/#/');
  //   cy.get("input[placeholder='Your email']")
  //     .type('testEmail')
  //     .should('be.visible')
  //     .should('exist')
  //     .should('have.value', 'testEmail');
  // });
  it('about', () => {
    cy.visit('/#/themeforest/about');
    cy.get("input[name='name']")
      .type('test Name')
      .should('have.value', 'test Name')
      .should('be.visible')
      .should('exist');
    cy.get("input[name='theme']")
      .type('test Theme')
      .should('have.value', 'test Theme')
      .should('be.visible')
      .should('exist');
    cy.get("input[name='message']")
      .type('test Message')
      .should('have.value', 'test Message')
      .should('be.visible')
      .should('exist');
    cy.get("input[placeholder='Your email']")
      .type('testEmail')
      .should('be.visible')
      .should('exist')
      .should('have.value', 'testEmail');
  });
  it('contacts', () => {
    cy.visit('/#/themeforest/contacts');
    cy.get("input[name='name']")
      .type('test Name')
      .should('be.visible')
      .should('exist')
      .should('have.value', 'test Name');
    cy.get("input[name='email']")
      .type('test Email')
      .should('be.visible')
      .should('exist')
      .should('have.value', 'test Email');
    cy.get("input[name='theme']")
      .type('test Theme')
      .should('be.visible')
      .should('exist')
      .should('have.value', 'test Theme');
    cy.get("input[name='message']")
      .type('test Message')
      .should('be.visible')
      .should('exist')
      .should('have.value', 'test Message');
  });
});
export {};
