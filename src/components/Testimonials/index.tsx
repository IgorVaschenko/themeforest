import Grid from '@mui/material/Grid';
import ArrowControls from 'components/ArrowControls';
import Testimonial from 'components/Testimonial';
import { usePagination } from 'hooks';

import { TfHeadline } from 'themeforest-design-system-react';

import { Props } from './types';

const Testimonials = ({ count, title, isMatch, testimonials }: Props) => {
  const [showPersons, ...props] = usePagination(testimonials, count);
  return (
    <Grid container spacing={1} justifyContent="space-between" alignItems="center">
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
              {title}
            </TfHeadline>
          </Grid>
          <ArrowControls isMatch={isMatch} props={props} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          {showPersons.map((props) => (
            <Testimonial key={props.title} {...props} isMatch={isMatch} count={count} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Testimonials;
