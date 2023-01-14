import { MemoryRouter as Router } from 'react-router-dom';

import { blogInfo } from 'mocks';

import BlogHome from '../../src/components/BlogHome';

describe('<BlogHome />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <BlogHome title={'blog'} isMatch={false} blogData={blogInfo} />{' '}
      </Router>
    );
  });
});
