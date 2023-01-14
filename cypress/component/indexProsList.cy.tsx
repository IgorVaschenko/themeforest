import ProsList from '../../src/components/ProsList';

describe('<ProsList />', () => {
  const title = ' title ';
  const subtitle = ' subtitle ';
  const prosItems = [{ title, subtitle: subtitle ? subtitle : undefined }];
  it('renders', () => {
    cy.mount(<ProsList prosItems={prosItems} />);
  });
});
