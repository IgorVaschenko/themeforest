import { clients } from 'mocks';

import Clients from '../../src/components/Clients';

describe('<Clients />', () => {
  it('renders', () => {
    cy.mount(<Clients clients={clients} isMatch={false} />);
  });
});
