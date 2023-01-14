import AlertMessage from '../../src/components/AlertMessage/index';

describe('<AlertMessage />', () => {
  it('renders', () => {
    cy.mount(<AlertMessage description={'description'} />);
  });
});
