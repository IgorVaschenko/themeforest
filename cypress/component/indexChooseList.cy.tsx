import ChooseList from '../../src/components/ChooseList';

describe('<ChooseList />', () => {
  const chooseItems = [
    {
      image: 'icon_brain_isometric_3d',
      title: 'Machine learning',
      subtitle:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
      link: '',
    },
  ];
  it('renders', () => {
    cy.mount(<ChooseList chooseItems={chooseItems} />);
  });
});
