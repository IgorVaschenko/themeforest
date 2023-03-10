import { useEffect, useMemo, useState } from 'react';

import { Grid } from '@mui/material';
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

import Loader from 'components/Loader';

import { Props } from './types';

const PayPalButton = ({ value, handleClose, setErrorSubmit, setSuccessSubmit }: Props) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: { ...options },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = useMemo(() => isInitialized || isPending, [isInitialized, isPending]);

  const payPalConfig: PayPalButtonsComponentProps = {
    forceReRender: [value],
    disabled: isLoading,
    style: { color: 'white', layout: 'horizontal' },
    createOrder: (_, actions) => actions.order.create({ purchase_units: [{ amount: { value } }] }),
    onApprove: (_, actions) =>
      actions.order
        ? actions.order
            .capture()
            .then(() => {
              setSuccessSubmit({ title: 'Success', description: 'Payment completed!' });
            })
            .catch(() => {
              setErrorSubmit({
                title: 'Error',
                description: 'Something went wrong. Please try to pay later',
              });
            })
            .finally(() => handleClose())
        : Promise.resolve().then(() => {
            throw new Error('Error with Paypal API');
          }),
    onInit: () => setIsInitialized(false),
  };

  return (
    <>
      {isLoading && (
        <Grid container justifyContent="center">
          <Grid item>
            <Loader />
          </Grid>
        </Grid>
      )}
      <PayPalButtons {...payPalConfig} />
    </>
  );
};

export default PayPalButton;
