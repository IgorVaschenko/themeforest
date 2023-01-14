import { MemoryRouter as Router } from 'react-router-dom';

import { blogInfo } from 'mocks';

import BlogList from '../../src/components/BlogList';

describe('<BlogList />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <BlogList isMatch={false} news={blogInfo} listDirection={'row'} newsVariant={'home'} />
      </Router>
    );
  });
});
