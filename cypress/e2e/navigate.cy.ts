describe('Page navigation', () => {
  it('loading passes', () => {
    cy.visit('/').location('pathname').should('equal', '/themeforest/home');
    cy.visit('/themeforest/about').location('pathname').should('equal', '/themeforest/about');
    cy.visit('/themeforest/home').location('pathname').should('equal', '/themeforest/home');
    cy.visit('/themeforest/blog').location('pathname').should('equal', '/themeforest/blog');
    cy.visit('/themeforest/services').location('pathname').should('equal', '/themeforest/services');
    cy.visit('/themeforest/solutions')
      .location('pathname')
      .should('equal', '/themeforest/solutions');
    cy.visit('/themeforest/faq').location('pathname').should('equal', '/themeforest/faq');
    cy.visit('/themeforest/contacts').location('pathname').should('equal', '/themeforest/contacts');
    cy.visit('/themeforest/team').location('pathname').should('equal', '/themeforest/team');
    cy.visit('/themeforest/404').location('pathname').should('equal', '/themeforest/404');
  });
});
export {};
