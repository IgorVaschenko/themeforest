import { Button, Grid } from '@mui/material';

import { useBlogOptions } from 'hooks';

import { TfHeadline } from 'themeforest-design-system-react';

import BlogItem from 'components/BlogItem';

import { Props } from './types';

const BlogList = ({ news, listDirection, newsVariant, isMatch, setTag }: Props) => {
  const { portion, isButton, title, setPage } = useBlogOptions(news, newsVariant);

  return (
    <Grid item mb={10}>
      <Grid container direction={listDirection} spacing={4} alignItems="flex-start" mb={4} mt={4}>
        {title && !!news.length && (
          <TfHeadline variant="h4" style={{ marginLeft: '30px' }}>
            {title}
          </TfHeadline>
        )}
        {portion.map((props) => (
          <BlogItem
            key={props.id}
            isMatch={isMatch}
            {...props}
            variant={newsVariant}
            setTag={setTag}
          />
        ))}
        {isButton && (
          <Grid container justifyContent="center" mt={5}>
            <Button variant="contained" onClick={setPage} sx={{ alignSelf: 'center' }}>
              See more
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default BlogList;
