import { MemoryRouter as Router } from 'react-router-dom';

import { testimonials } from 'mocks';

import Testimonials from '../../src/components/Testimonials';

describe('<Testimonials />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Testimonials
          title={'Testimonials'}
          count={3}
          isMatch={false}
          testimonials={testimonials}
        />{' '}
      </Router>
    );
  });
});
