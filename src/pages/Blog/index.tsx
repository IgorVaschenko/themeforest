import { useCallback, useDeferredValue, useMemo, useState } from 'react';

import { Grid } from '@mui/material';

import useMatch from 'hooks/useMatch';

import { blogInfo, tagsList } from 'mocks';

import { themeParams } from 'theme';

import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import BlogList from 'components/BlogList';
import Breadcrumbs from 'components/Breadcrumbs';
import FooterLinks from 'components/FooterLinks';
import SearchBar from 'components/SearchBar';
import Subscribe from 'components/Subcribe';

import TagsList from 'components/TagsList';

import { BlogHeader } from './styled';
const Blog = () => {
  const { isMatch } = useMatch();
  const [searchValue, setSearchValue] = useState('');
  const [searchTag, setSearchTag] = useState('');
  const defferedValue = useDeferredValue(searchValue);

  const handleChangeValue = useCallback((value: string) => setSearchValue(value), []);
  const handleTags = useCallback((value: string) => setSearchTag(value), []);

  const filteredNews = useMemo(
    () => blogInfo.filter(({ title }) => title.toLowerCase().includes(defferedValue)),
    [defferedValue]
  );
  const filteredNewsByTag = useMemo(
    () =>
      blogInfo.filter(
        ({ tags }) =>
          searchTag !== 'All tags' &&
          tags.join(' ').toLowerCase().split(' ').includes(searchTag.toLocaleLowerCase())
      ),
    [searchTag]
  );

  const handleTagList = (tag: string) => {
    handleTags(tag);
  };

  return (
    <>
      <BlogHeader isMatch={isMatch}>
        <Grid container>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10}>
            <Grid
              container
              direction="column"
              alignItems={isMatch ? 'flex-start' : 'center'}
              sx={{ textAlign: 'center' }}
              pt={3}
              pb={3}
            >
              <Grid item xs={8}>
                <TfHeadline variant="h1">Discover new things with Ensome blog</TfHeadline>
              </Grid>
              <Grid item xs={8}>
                <TfParagraph variant="p1" color={themeParams.colors.greyText}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                </TfParagraph>
              </Grid>
              <Grid item md={6} xs={10}>
                <Breadcrumbs current="Blog" color={themeParams.colors.black} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
      </BlogHeader>

      <Grid container mt={7} mb={7} justifyContent="center">
        <Grid item md={3} xs={1} />
        <Grid item md={6} xs={10}>
          <Grid container direction="column" alignItems="center" sx={{ alignContent: 'center' }}>
            <SearchBar value={searchValue} setValue={handleChangeValue} />

            <Grid item sx={{ marginTop: '50px' }}>
              <TagsList tags={tagsList} setTagList={handleTagList} pointer={searchTag} />
            </Grid>

            {filteredNews.length && filteredNewsByTag.length ? (
              <BlogList
                news={filteredNewsByTag}
                newsVariant="blog"
                listDirection="column"
                isMatch={isMatch}
                setTag={handleTags}
              />
            ) : filteredNews.length ? (
              <BlogList
                news={filteredNews}
                newsVariant="blog"
                listDirection="column"
                isMatch={isMatch}
                setTag={handleTags}
              />
            ) : (
              <TfHeadline variant="h2" component="p">
                Nothing was found
              </TfHeadline>
            )}
          </Grid>
        </Grid>
        <Grid item md={3} xs={1} />
      </Grid>

      <Subscribe isMatch={isMatch} />
      <FooterLinks isMatch={isMatch} />
    </>
  );
};

export default Blog;
