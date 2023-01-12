import { useMemo } from 'react';

import { Dialog, Stack } from '@mui/material';
import { themeParams } from 'theme';
import { TfHeadline } from 'themeforest-design-system-react';
import { parsePriceValue } from 'utils';

import PaymentForm from 'components/PaymentForm';
import ProsList from 'components/ProsList';

import { Props } from './types';

const PriceDialog = ({
  title,
  price,
  possibilities,
  duration,
  open,
  handleClose,
  setErrorSubmit,
  setSuccessSubmit,
}: Props) => {
  const prosItems = useMemo(
    () => possibilities.map((title: string) => ({ title })),
    [possibilities]
  );
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack p={6} pt={0} spacing={1}>
        <TfHeadline variant="h4" component="p">
          Payment
        </TfHeadline>
        <Stack direction="column" spacing={-2}>
          <Stack direction="row" alignItems="center">
            <TfHeadline variant="h6">Plan:&nbsp; </TfHeadline>
            <TfHeadline variant="h6" component="span" color={themeParams.colors.primary}>
              {title}
            </TfHeadline>
          </Stack>
          <Stack direction="row" alignItems="center">
            <TfHeadline variant="h6"> Price:&nbsp; </TfHeadline>
            <TfHeadline variant="h6" component="span" color={themeParams.colors.primary}>
              {price}
            </TfHeadline>
          </Stack>
          <Stack direction="row" alignItems="center">
            <TfHeadline variant="h6"> Duration:&nbsp; </TfHeadline>
            <TfHeadline variant="h6" component="span" color={themeParams.colors.primary}>
              {duration}
            </TfHeadline>
          </Stack>
        </Stack>
        <ProsList prosItems={prosItems} />
        <PaymentForm
          value={parsePriceValue(price)}
          handleClose={handleClose}
          setErrorSubmit={setErrorSubmit}
          setSuccessSubmit={setSuccessSubmit}
        />
      </Stack>
    </Dialog>
  );
};

export default PriceDialog;
