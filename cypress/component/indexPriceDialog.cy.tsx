import { prices } from 'mocks';
import { AlertHookInitialValue } from 'types';

import PriceDialog from '../../src/components/PriceDialog';

describe('<PriceDialog />', () => {
  const { title, price, possibilities, durations } = prices[0];

  it('renders', () => {
    cy.mount(
      <PriceDialog
        duration={''}
        open={true}
        handleClose={function (): void {
          console.log('close');
        }}
        setErrorSubmit={function (payload: Omit<AlertHookInitialValue, 'severity'>): void {
          console.log('error');
        }}
        setSuccessSubmit={function (payload: Omit<AlertHookInitialValue, 'severity'>): void {
          console.log('success');
        }}
        title={title}
        price={price}
        possibilities={possibilities}
      />
    );
  });
});
