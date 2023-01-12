import { useState, useCallback, useMemo } from 'react';

import { Grid } from '@mui/material';

import { TfButton, TfCard } from 'themeforest-design-system-react';

import { parseDuration } from 'utils';

import PriceDialog from 'components/PriceDialog';
import ProsList from 'components/ProsList';
import ToggleGroup from 'components/ToggleGroup';

import { CardContainer } from './styled';
import { Props } from './types';

const PriceCard = (props: Props) => {
  const { title, price, durations, possibilities } = props;
  const [open, setOpen] = useState(false);
  const [pickedDuration, setPickedDuration] = useState(durations[0]);

  const handleToggle = useCallback((newPicked: string) => {
    setPickedDuration(newPicked);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const prosItems = useMemo(() => possibilities.map((title) => ({ title })), [possibilities]);
  return (
    <>
      <Grid item lg={2.9} md={5.9} xs={12}>
        <Grid container justifyContent="center">
          <CardContainer>
            <ToggleGroup toggles={durations} picked={pickedDuration} setPicked={handleToggle} />
            <TfCard
              width="220px"
              view="price"
              variant="desktop"
              solutions={possibilities}
              title={title}
              cost={price}
            >
              <TfButton onClick={handleOpen} variant="contained" text="Choose plan" width="100%" />
              <ProsList prosItems={prosItems} />
            </TfCard>
            <PriceDialog
              {...props}
              open={open}
              handleClose={handleClose}
              duration={parseDuration(pickedDuration)}
            />
          </CardContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default PriceCard;
