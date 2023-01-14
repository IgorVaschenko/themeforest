import Pricing from '../../src/components/Pricing';

describe('<Pricing />', () => {
  it('renders', () => {
    cy.mount(<Pricing isMatch={false} />);
  });
});
