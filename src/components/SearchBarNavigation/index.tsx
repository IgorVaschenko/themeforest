import { useCallback, useState } from 'react';

import { Autocomplete } from '@mui/material';
import Grid from '@mui/material/Grid';
import { blogInfo } from 'mocks';

import BlogItem from 'components/BlogItem';
import SearchBar from 'components/SearchBar';

const SearchBarNavigation = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleChangeOption = useCallback((value: string) => setSearchValue(value), []);

  return (
    <Grid item xs={11}>
      <Autocomplete
        freeSolo
        options={blogInfo.map((item) => item)}
        getOptionLabel={(item) => (typeof item !== 'string' ? item.title : item)}
        renderOption={({ id }, option) => (
          <BlogItem isMatch={false} key={id} {...option} variant="search-bar" />
        )}
        renderInput={(params) => (
          <SearchBar params={params} value={searchValue} setValue={handleChangeOption} />
        )}
      />
    </Grid>
  );
};

export default SearchBarNavigation;
