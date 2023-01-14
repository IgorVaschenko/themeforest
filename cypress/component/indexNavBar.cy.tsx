import { MemoryRouter as Router } from 'react-router-dom';

import { routes } from 'routes';

import NavBar from '../../src/components/NavBar';

describe('<NavBar />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <NavBar routes={routes} />{' '}
      </Router>
    );
  });
});
