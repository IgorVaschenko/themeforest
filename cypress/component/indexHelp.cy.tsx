import { MemoryRouter as Router } from 'react-router-dom';

import Help from '../../src/components/Help';

describe('<Help />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Help isMatch={false} />{' '}
      </Router>
    );
  });
});
