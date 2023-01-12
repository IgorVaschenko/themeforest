import { Navigate, useParams } from 'react-router-dom';

import { Grid, useMediaQuery, useTheme } from '@mui/material';
import BlogList from 'components/BlogList';
import FooterLinks from 'components/FooterLinks';
import SearchBarNavigation from 'components/SearchBarNavigation';
import Subscribe from 'components/Subcribe';
import TagsList from 'components/TagsList';
import { blogInfo, socials } from 'mocks';
import { tagsList } from 'mocks';
import { getPageUrl, Paths } from 'routes';
import { Banner } from 'theme';
import { TfHeadline, TfIcons, TfLink, TfParagraph } from 'themeforest-design-system-react';
import { getPopularNews, getRelatedNews } from 'utils';

import { Post } from './styled';

const News = () => {
  const { id: newsId } = useParams();
  const item = blogInfo.find(({ id }) => id === newsId);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  if (!item) return <Navigate to={getPageUrl(Paths.NOT_FOUND)} />;

  const { title, data, image, subtitle, tags, id, author, rate } = item;

  return (
    <>
      <Grid container mt={5}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container>
            <Grid item md={7} xs={12}>
              <Grid container direction="column">
                <Banner image={image} height="330" width="100%" />
                <Grid container direction="row">
                  <Grid item>
                    <Grid container alignItems="center" mr={5}>
                      <TfIcons iconName="icon_calendar_grey" />
                      <TfParagraph variant="p3" component="p" color="#9497A1">
                        {subtitle}
                      </TfParagraph>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center">
                      <TfIcons iconName="icon_person_grey" />
                      <TfParagraph variant="p3" component="p" color="#9497A1">
                        {author}
                      </TfParagraph>
                    </Grid>
                  </Grid>
                </Grid>

                <TfHeadline variant={isMatch ? 'h5' : 'h3'} component="p">
                  {title}
                </TfHeadline>

                <Post dangerouslySetInnerHTML={{ __html: data }} mt={-3} color="#9497A1" />

                <Grid container direction="row" alignItems="center" justifyContent="space-between">
                  <Grid item ml={1}>
                    <Grid container alignItems="center" mr={5}>
                      <TfIcons iconName="icon_data_line_grey" />
                      <TfParagraph variant="p2" component="p" color="#9497A1">
                        {rate} Veiws
                      </TfParagraph>
                    </Grid>
                  </Grid>
                  <Grid item ml={1}>
                    <Grid container alignItems="center">
                      <TfIcons iconName="icon_share_grey" />
                      <TfParagraph variant="p2" component="p" color="#9497A1">
                        Share:
                      </TfParagraph>
                      {socials.map(({ image, href }) => (
                        <Grid item key={href}>
                          <TfLink variant="simple" href={href} target="_blank">
                            <TfIcons iconName={`${image}_grey`} />
                          </TfLink>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent={isMatch ? 'flex-start' : 'flex-end'}
                    alignItems="center"
                    ml={1}
                  >
                    <TfIcons iconName="icon_tag_grey" />
                    <TfParagraph variant="p2" component="p" color="#9497A1">
                      Tags:
                    </TfParagraph>
                    <Grid item>
                      <TagsList tags={tags} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <BlogList
                isMatch={isMatch}
                news={getRelatedNews(blogInfo, id, tags)}
                newsVariant="related"
                listDirection="column"
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <Grid container justifyContent="center">
                <SearchBarNavigation />
                <Grid item md={10}>
                  <BlogList
                    isMatch={isMatch}
                    news={getPopularNews(blogInfo, id)}
                    newsVariant="popular"
                    listDirection="column"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                ml={isMatch ? 0 : 3}
                direction="column"
                spacing={1}
                alignItems="flex-start"
              >
                <TfHeadline variant="h5" style={{ marginLeft: '10px' }}>
                  Tags
                </TfHeadline>
                <TagsList tags={tagsList} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Subscribe isMatch={isMatch} />
      <FooterLinks isMatch={isMatch} />
    </>
  );
};

export default News;
