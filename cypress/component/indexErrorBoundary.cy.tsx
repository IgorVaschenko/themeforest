import ErrorBoundary from '../../src/components/ErrorBoundary';

describe('<ErrorBoundary />', () => {
  const child = <div />;
  it('renders', () => {
    // eslint-disable-next-line react/no-children-prop
    cy.mount(<ErrorBoundary children={child} fallback={'Error'} />);
  });
});
