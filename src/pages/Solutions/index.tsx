import { Grid } from '@mui/material';

import useMatch from 'hooks/useMatch';

import { servicesInfo, solutionInfo, testimonials } from 'mocks';

import { Banner, themeParams, theme } from 'theme';

import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import Benefits from 'components/Benefits';
import Breadcrumbs from 'components/Breadcrumbs';
import ChooseList from 'components/ChooseList';
import Footer from 'components/Footer';

import Testimonials from 'components/Testimonials';

const Solutions = () => {
  const { isMatch } = useMatch();
  const chooseItems = servicesInfo.slice(0, 3);
  return (
    <>
      <Grid container mt={3}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Breadcrumbs current="Solutions" color={themeParams.colors.black} />
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid
        container
        mt={5}
        justifyContent="center"
        alignItems="baseline"
        sx={{ textAlign: 'center' }}
      >
        <Grid item md={3} xs={1} />
        <Grid item md={6} xs={10}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <TfHeadline variant="h6" color="#185CFF">
                Solutions
              </TfHeadline>
            </Grid>
            <Grid item>
              <TfHeadline variant={isMatch ? 'h3' : 'h1'}>Data analytics solutions</TfHeadline>
            </Grid>
            <Grid item>
              <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                Getting ready for your success, we provide truly outstanding IT solutions.
              </TfParagraph>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} xs={1} />
      </Grid>

      <Grid container justifyContent="center">
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container justifyContent="center">
            <Benefits benefits={solutionInfo} variant="solutions" />
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container sx={{ backgroundColor: '#F1F6FA' }}>
        {isMatch ? (
          <>
            <Grid item xs={1} />
            <Grid container justifyContent="center">
              <Grid item xs={10}>
                <Grid item xs={10}>
                  <TfHeadline variant="h3" component="p">
                    Radically new solutions for data
                  </TfHeadline>
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
                      image="solution"
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
                    image="solution"
                  />
                </Grid>
                <Grid item md={5} xs={12}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <TfHeadline variant="h1" component="p">
                        Why choose us?
                      </TfHeadline>
                    </Grid>
                    <Grid item xs={12}>
                      <ChooseList chooseItems={chooseItems} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>

      <Grid container mt={12} mb={12}>
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
      <Footer isMatch={isMatch} />
    </>
  );
};

export default Solutions;
