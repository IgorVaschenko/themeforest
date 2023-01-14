import { MemoryRouter as Router } from 'react-router-dom';

import MobileLinks from '../../src/components/MobileLinks';

describe('<MobileLinks />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <MobileLinks />{' '}
      </Router>
    );
  });
});
