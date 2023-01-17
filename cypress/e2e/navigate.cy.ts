describe('Page navigation', () => {
  it('loading pages', () => {
    cy.visit('/')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/home');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/home');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/about')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/about');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/about');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/home')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/home');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/home');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/blog')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/blog');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/blog');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/services')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/services');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/services');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/solutions')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/solutions');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/solutions');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/faq')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/faq');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/faq');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/contacts')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/contacts');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/contacts');
        expect(loc.port).to.eq('3000');
      });
    cy.visit('/#/themeforest/404')
      .location()
      .should((loc) => {
        expect(loc.hash).to.eq('#/themeforest/404');
        expect(loc.protocol).to.eq('http:');
        expect(loc.host).to.eq('localhost:3000');
        expect(loc.href).to.eq('http://localhost:3000/#/themeforest/404');
        expect(loc.port).to.eq('3000');
      });
  });
});
export {};
