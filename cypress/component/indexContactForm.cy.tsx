import ContactForm from '../../src/components/ContactForm';

describe('<ContactForm />', () => {
  it('renders', () => {
    cy.mount(<ContactForm variant={'outlined'} />);
  });
});
