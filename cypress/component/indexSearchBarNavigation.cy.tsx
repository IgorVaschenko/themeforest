import SearchBarNavigation from '../../src/components/SearchBarNavigation';

describe('<SearchBarNavigation />', () => {
  it('renders', () => {
    cy.mount(<SearchBarNavigation />);
  });
});
