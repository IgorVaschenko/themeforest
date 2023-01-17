import { Link } from 'react-router-dom';

import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getNewsUrl } from 'routes';

import { TfCard, TfLink, TfTag } from 'themeforest-design-system-react';

import { Props } from './types';
const BlogItem = ({
  id,
  image,
  title,
  subtitle,
  paragraph,
  tags,
  variant,
  isMatch,
  setTag,
}: Props) => {
  const handleChange = (tag: string) => () => {
    setTag && tag && setTag(tag);
  };
  return (
    <Grid
      item
      md={4}
      xs={12}
      key={id}
      sx={{
        marginBottom: variant === 'search-bar' ? '25px' : 0,
        cursor: variant === 'search-bar' ? 'pointer' : 'default',
      }}
    >
      {variant === 'blog' || variant === 'related' ? (
        <Link to={getNewsUrl(id)}>
          <TfCard
            width="100%"
            view="blog"
            variant={
              variant === 'blog'
                ? 'big'
                : !isMatch && variant === 'related'
                ? 'right_text'
                : 'small'
            }
            image={image}
            title={title}
            date={subtitle}
            subtitle={paragraph}
          >
            {variant === 'blog' && (
              <Stack direction="row">
                {tags.map((tag) => (
                  <TfTag onClick={handleChange(tag)} key={tag} pointer>
                    {tag}
                  </TfTag>
                ))}
              </Stack>
            )}
          </TfCard>
        </Link>
      ) : (
        <Link to={getNewsUrl(id)}>
          <TfCard
            width={variant === 'search-bar' ? '400px' : '100%'}
            view="blog"
            variant={
              variant === 'popular'
                ? 'without_description'
                : variant === 'search-bar'
                ? 'without_description'
                : 'small'
            }
            image={image}
            title={title}
            date={subtitle}
            subtitle={paragraph}
          >
            {(variant === 'popular' || variant === 'home') && (
              <TfLink variant="arrow" text="Read more" />
            )}
          </TfCard>
        </Link>
      )}
    </Grid>
  );
};

export default BlogItem;
