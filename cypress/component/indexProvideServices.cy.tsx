import ProvideServices from '../../src/components/ProvideServices';

describe('<ProvideServices />', () => {
  it('renders', () => {
    cy.mount(<ProvideServices isMatch={false} />);
  });
});
