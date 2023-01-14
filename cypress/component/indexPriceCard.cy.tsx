import { prices } from 'mocks';
import { AlertHookInitialValue } from 'types';

import PriceCard from '../../src/components/PriceCard';

describe('<PriceCard />', () => {
  const { title, price, possibilities, durations } = prices[0];
  it('renders', () => {
    cy.mount(
      <PriceCard
        setErrorSubmit={function (payload: Omit<AlertHookInitialValue, 'severity'>): void {
          console.log('error');
        }}
        setSuccessSubmit={function (payload: Omit<AlertHookInitialValue, 'severity'>): void {
          console.log('success');
        }}
        title={title}
        price={price}
        possibilities={possibilities}
        durations={durations}
      />
    );
  });
});
