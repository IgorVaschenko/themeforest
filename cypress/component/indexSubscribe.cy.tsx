import Subscribe from '../../src/components/Subcribe';

describe('<Subscribe />', () => {
  it('renders', () => {
    cy.mount(<Subscribe isMatch={false} />);
  });
});
