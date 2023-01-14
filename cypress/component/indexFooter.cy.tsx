import { MemoryRouter as Router } from 'react-router-dom';

import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Footer isMatch={false} />{' '}
      </Router>
    );
  });
});
