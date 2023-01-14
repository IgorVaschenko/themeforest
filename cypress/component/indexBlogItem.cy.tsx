import { MemoryRouter as Router } from 'react-router-dom';

import { blogInfo } from 'mocks';

import BlogItem from '../../src/components/BlogItem';

describe('<BlogItem />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <BlogItem variant={'home'} isMatch={false} {...blogInfo[0]} />
      </Router>
    );
  });
});
