import Benefits from '../../src/components/Benefits';

describe('<Benefits />', () => {
  const benefits = [
    {
      icon: 'icon_brain_circuit',
      title: 'Machine learning',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    },
    {
      icon: 'icon_key',
      title: 'Access control',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    },
  ];
  it('renders', () => {
    cy.mount(<Benefits benefits={benefits} variant={'home'} />);
  });
});
