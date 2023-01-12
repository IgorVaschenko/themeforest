import { Grid } from '@mui/material';
import { TfControl } from 'themeforest-design-system-react';

import { Props } from './types';

const ArrowControls = ({
  props: [handleBackward, handleForward, isActiveBackward, isActiveForward],
  isMatch,
}: Props) => {
  return (
    <Grid item>
      <Grid container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <TfControl
            variant={isMatch ? 'mobile' : 'desktop'}
            direction="left"
            onClick={handleBackward}
            disabled={isActiveBackward}
          />
        </Grid>
        <Grid item>
          <TfControl
            variant={isMatch ? 'mobile' : 'desktop'}
            direction="right"
            onClick={handleForward}
            disabled={isActiveForward}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArrowControls;
