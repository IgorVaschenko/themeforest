import SearchBar from '../../src/components/SearchBar';

describe('<SearchBar />', () => {
  it('renders', () => {
    cy.mount(
      <SearchBar
        value={'value'}
        setValue={function (value: string): void {
          console.log('setValue');
        }}
      />
    );
  });
});
