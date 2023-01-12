import Grid from '@mui/material/Grid';

import useMatch from 'hooks/useMatch';
import { servicesInfo } from 'mocks';
import { theme, themeParams } from 'theme';
import { TfCard, TfHeadline, TfLink, TfParagraph } from 'themeforest-design-system-react';

import Breadcrumbs from 'components/Breadcrumbs';
import Footer from 'components/Footer';

import ProvideServices from 'components/ProvideServices';

const Services = () => {
  const { isMatch } = useMatch();
  return (
    <>
      <Grid container mt={3}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Breadcrumbs current="Services" color={themeParams.colors.black} />
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container justifyContent="center" alignItems="baseline" sx={{ textAlign: 'center' }}>
        <Grid item md={3} xs={1} />
        <Grid item md={6} xs={10}>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <TfHeadline variant="h6" color={theme.palette.primary.main}>
                Services
              </TfHeadline>
            </Grid>
            <Grid item>
              <TfHeadline variant={isMatch ? 'h3' : 'h1'}>Data Analytics Services</TfHeadline>
            </Grid>
            <Grid item>
              <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
              </TfParagraph>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} xs={1} />
      </Grid>

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {servicesInfo.map(({ image, title, subtitle }) => (
              <Grid item xs={12} md={5} key={title}>
                <TfCard
                  view={!isMatch ? 'services' : 'services_mobile'}
                  variant={!isMatch ? 'glass-icons' : 'glass_icons_mob'}
                  icon={image}
                  title={title}
                  subtitle={subtitle}
                >
                  <TfLink variant="arrow" text="Read more" href=""></TfLink>
                </TfCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <ProvideServices isMatch={isMatch} />
      <Footer isMatch={isMatch} />
    </>
  );
};

export default Services;
