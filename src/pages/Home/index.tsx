import { NavLink } from 'react-router-dom';

import { Grid } from '@mui/material';

import useMatch from 'hooks/useMatch';

import { benefits, blogInfo, testimonials } from 'mocks';

import { Paths, getPageUrl } from 'routes';

import { theme, themeParams } from 'theme';

import { Banner } from 'theme/styled';

import { TfButton, TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import Benefits from 'components/Benefits';
import BlogHome from 'components/BlogHome';
import Footer from 'components/Footer';
import Pricing from 'components/Pricing';
import ProvideServices from 'components/ProvideServices';
import Testimonials from 'components/Testimonials';

import { TfHeadlineStyled, CircleLinkContainer } from './styled';

const Home = () => {
  const { isMatch } = useMatch();
  return (
    <>
      <Grid container mt={3}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={6} xs={12}>
              <TfHeadlineStyled variant={isMatch ? 'h3' : 'h1'} component="p">
                Find true power in your data with
                <span> Ensome</span>
              </TfHeadlineStyled>
            </Grid>
            <Grid item xs={2} />
            <Grid item md={4} xs={12}>
              <TfParagraph variant={isMatch ? 'p3' : 'p2'} color={theme.palette.secondary.main}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi.
              </TfParagraph>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container mt={7}>
        <Grid item xs={12}>
          <Banner height={isMatch ? '230' : '590'} image="home">
            <CircleLinkContainer>
              <NavLink to={getPageUrl(Paths.SERVICES)}>
                <TfButton
                  variant="circle"
                  text="Learn more"
                  size={isMatch ? 'sm_circle' : 'lg_circle'}
                  shadow
                ></TfButton>
              </NavLink>
            </CircleLinkContainer>
          </Banner>
        </Grid>
      </Grid>

      <Grid container mb={isMatch ? 2 : 7} mt={7}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container spacing={isMatch ? 0 : 5} alignItems="baseline">
            <Grid item md={6} xs={12}>
              <TfHeadlineStyled variant={isMatch ? 'h3' : 'h1'} component="p">
                The <span>newest</span> business analytics platform
              </TfHeadlineStyled>
            </Grid>
            <Grid item md={5} xs={12}>
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item xs={12}>
                  <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </TfParagraph>
                </Grid>
                <Grid item md={6} xs={12}>
                  <NavLink to={getPageUrl(Paths.SOLUTIONS)}>
                    <TfButton
                      variant="contained"
                      shadow
                      text="Discover more"
                      width={isMatch ? '100%' : '185px'}
                    />
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container sx={{ backgroundColor: themeParams.bgColor.grey }} pb={isMatch ? 2 : 7}>
        {isMatch ? (
          <>
            <Grid item xs={1} />
            <Grid container justifyContent="center">
              <Grid item xs={10}>
                <Grid item xs={10}>
                  <TfHeadlineStyled variant="h3" component="p">
                    Radically new solutions for data
                  </TfHeadlineStyled>
                </Grid>
                <Grid
                  container
                  spacing={isMatch ? 0 : 5}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item md={7} xs={12}>
                    <Banner
                      width={isMatch ? '360' : ''}
                      height={isMatch ? '180' : '740'}
                      image={isMatch ? 'home-half_sm' : 'home-half'}
                    />
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <Grid container alignItems="center">
                      <Grid item xs={12}>
                        <TfParagraph
                          variant={isMatch ? 'p3' : 'p1'}
                          color={theme.palette.secondary.main}
                        >
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </TfParagraph>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <NavLink to={getPageUrl(Paths.SOLUTIONS)}>
                          <TfButton
                            variant="contained"
                            shadow
                            text="Learn more"
                            width={isMatch ? '100%' : '185px'}
                          />
                        </NavLink>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Grid
                container
                spacing={isMatch ? 0 : 5}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item md={6} xs={12}>
                  <Banner
                    width={isMatch ? '360' : ''}
                    height={isMatch ? '180' : '740'}
                    image={isMatch ? 'home-half_sm' : 'home-half'}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <TfHeadlineStyled variant="h1" component="p">
                        Radically new solutions for data
                      </TfHeadlineStyled>
                    </Grid>
                    <Grid item xs={12}>
                      <TfParagraph
                        variant={isMatch ? 'p3' : 'p1'}
                        color={theme.palette.secondary.main}
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </TfParagraph>
                    </Grid>
                    <Grid mt={2} item lg={7} md={8} xs={12}>
                      <NavLink to={getPageUrl(Paths.SOLUTIONS)}>
                        <TfButton
                          variant="contained"
                          shadow
                          text="Learn more"
                          width={isMatch ? '100%' : '185px'}
                        />
                      </NavLink>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>

      <ProvideServices isMatch={isMatch} />

      <Grid container sx={{ backgroundColor: themeParams.bgColor.grey }}>
        <Grid item md={2} xs={1} />
        <Grid item md={9} xs={10}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item md={6} xs={12}>
              <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
                The benefits of Ensome
              </TfHeadline>
              <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </TfParagraph>
            </Grid>
            <Grid item md={6} xs={12}>
              <Benefits benefits={benefits} variant="home" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container mt={12} mb={8}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Testimonials
            count={3}
            title="Testimonials"
            isMatch={isMatch}
            testimonials={testimonials}
          />
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container>
        <Grid item md={1} xs={1} />
        <Grid item md={10} xs={10}>
          <Pricing isMatch={isMatch} />
        </Grid>
        <Grid item md={1} xs={1} />
      </Grid>

      <Grid container mt={10} mb={12}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <BlogHome title="Our blog" blogData={blogInfo} isMatch={isMatch} />
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Footer isMatch={isMatch} />
    </>
  );
};

export default Home;
