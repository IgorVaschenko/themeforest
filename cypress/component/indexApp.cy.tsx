import App from '../../src/app/index';

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />);
  });
});
