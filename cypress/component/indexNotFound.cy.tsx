import NotFound from '../../src/pages/NotFound';

describe('<NotFound />', () => {
  it('renders', () => {
    cy.mount(<NotFound />);
  });
});
