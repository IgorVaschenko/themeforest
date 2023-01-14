import ToggleGroup from '../../src/components/ToggleGroup';

describe('<ToggleGroup />', () => {
  it('renders', () => {
    cy.mount(
      <ToggleGroup
        toggles={['week', 'day']}
        picked={''}
        setPicked={() => console.log('setPicked')}
      />
    );
  });
});
