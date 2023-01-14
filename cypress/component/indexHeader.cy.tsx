import { MemoryRouter as Router } from 'react-router-dom';

import Header from '../../src/components/Header';

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Header />{' '}
      </Router>
    );
  });
});
