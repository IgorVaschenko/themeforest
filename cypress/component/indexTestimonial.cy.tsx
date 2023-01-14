import { MemoryRouter as Router } from 'react-router-dom';

import { testimonials } from 'mocks';

import Testimonial from '../../src/components/Testimonial';

describe('<Testimonial />', () => {
  const { image, title, position, comment } = testimonials[0];
  it('renders', () => {
    cy.mount(
      <Router>
        <Testimonial
          image={image}
          title={title}
          position={position}
          comment={comment}
          isMatch={false}
          count={1}
        />{' '}
      </Router>
    );
  });
});
