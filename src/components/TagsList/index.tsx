import { Grid } from '@mui/material';
import { TfTag } from 'themeforest-design-system-react';

import { Props } from './types';

const TagsList = ({ tags, setTagList, pointer }: Props) => {
  const handleChange = (tag: string) => () => {
    setTagList && tag && setTagList(tag);
  };
  return (
    <Grid container>
      {tags.map((tag, _, tages) => (
        <Grid item key={tag}>
          <TfTag
            onClick={handleChange(tag)}
            pointer={
              pointer === tag ||
              (pointer === '' && tag === 'All tags') ||
              (!setTagList && tages.length < 5)
            }
          >
            {tag}
          </TfTag>
        </Grid>
      ))}
    </Grid>
  );
};

export default TagsList;
