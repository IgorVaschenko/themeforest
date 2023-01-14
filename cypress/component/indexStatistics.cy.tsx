import { statistics } from 'constants/statistics';

import Statistics from '../../src/components/Statistics';

describe('<Statistics />', () => {
  it('renders', () => {
    cy.mount(<Statistics statistics={statistics} isMatch={false} />);
  });
});
