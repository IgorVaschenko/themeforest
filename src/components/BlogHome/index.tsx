import Grid from '@mui/material/Grid';

import { usePagination } from 'hooks';

import { TfHeadline } from 'themeforest-design-system-react';

import ArrowControls from 'components/ArrowControls';
import BlogList from 'components/BlogList';

import { Props } from './types';

const BlogHome = ({ title, blogData, isMatch }: Props) => {
  const [showBlog, ...props] = usePagination(blogData, 3);
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
      <Grid container>
        <BlogList isMatch={isMatch} news={showBlog} newsVariant="home" listDirection="row" />
      </Grid>
    </Grid>
  );
};
export default BlogHome;
