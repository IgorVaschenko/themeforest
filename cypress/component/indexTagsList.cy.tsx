import { tagsList } from 'mocks';

import TagsList from '../../src/components/TagsList';

describe('<TagsList />', () => {
  it('renders', () => {
    cy.mount(<TagsList tags={tagsList} />);
  });
});
