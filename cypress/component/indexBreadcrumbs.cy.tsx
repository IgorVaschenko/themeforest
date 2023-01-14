import { MemoryRouter as Router } from 'react-router-dom';

import Breadcrumbs from '../../src/components/Breadcrumbs';

describe('<Breadcrumbs />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Breadcrumbs current={'FAQs'} />{' '}
      </Router>
    );
  });
});
