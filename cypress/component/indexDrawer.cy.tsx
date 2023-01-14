import { MemoryRouter as Router } from 'react-router-dom';

import Drawer from '../../src/components/Drawer';

describe('<Drawer />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Drawer />{' '}
      </Router>
    );
  });
});
