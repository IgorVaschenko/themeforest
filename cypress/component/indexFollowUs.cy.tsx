import FollowUs from '../../src/components/FollowUs';

describe('<FollowUs />', () => {
  it('renders', () => {
    cy.mount(<FollowUs theme={'dark'} />);
  });
});
