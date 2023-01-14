import { AlertHookInitialValue } from 'types';

import PaymentForm from '../../src/components/PaymentForm';

describe('<PaymentForm />', () => {
  it('renders', () => {
    cy.mount(
      <PaymentForm
        value={''}
        handleClose={function (): void {
          console.log('close');
        }}
        setErrorSubmit={function (payload: Omit<AlertHookInitialValue, 'severity'>): void {
          console.log('Error Submit');
        }}
        setSuccessSubmit={function (payload: Omit<AlertHookInitialValue, 'severity'>): void {
          console.log('Success Submit');
        }}
      />
    );
  });
});
