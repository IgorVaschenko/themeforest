import { teamInfo } from 'mocks';

import TeamBox from '../../src/components/TeamBox';

describe('<TeamBox />', () => {
  it('renders', () => {
    cy.mount(<TeamBox persons={teamInfo} count={3} isMatch={false} />);
  });
});
