import { MemoryRouter as Router } from 'react-router-dom';

import FooterLinks from '../../src/components/FooterLinks';

describe('<FooterLinks />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <FooterLinks isMatch={false} />{' '}
      </Router>
    );
  });
});
