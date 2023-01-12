import { Grid } from '@mui/material';

import Breadcrumbs from 'components/Breadcrumbs';
import ContactForm from 'components/ContactForm';
import FooterLinks from 'components/FooterLinks';
import MapBox from 'components/MapBox';
import useMatch from 'hooks/useMatch';
import { contacts } from 'mocks';

import { themeParams } from 'theme';
import { TfHeadline, TfIcons, TfParagraph } from 'themeforest-design-system-react';

import { TfHeadlineStyled } from './styled';

const Contacts = () => {
  const { isMatch } = useMatch();
  return (
    <>
      <Grid container mt={3}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Breadcrumbs current="Contacts" color={themeParams.colors.black} />
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container mt={5}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item md={5} xs={12}>
              <TfHeadlineStyled variant={isMatch ? 'h3' : 'h1'} component="p">
                How can we <span> help you?</span>
              </TfHeadlineStyled>
            </Grid>
            <Grid item md={5} xs={12}>
              <ContactForm variant="outlined" />
            </Grid>
          </Grid>
          <Grid
            container
            direction={isMatch ? 'column' : 'row'}
            spacing={4}
            pb={4}
            justifyContent="flex-start"
          >
            {contacts.map(({ label, info, icon }) => (
              <Grid item key={info} sx={{ marginTop: '-30px' }}>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <TfIcons iconName={icon} />
                    </Grid>
                    <Grid item>
                      <TfHeadline variant="h7">{label}</TfHeadline>
                    </Grid>
                  </Grid>
                  <TfParagraph
                    variant="p2"
                    color={themeParams.colors.greyText}
                    style={{ marginTop: '-20px' }}
                  >
                    {info}
                  </TfParagraph>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <MapBox />
      <FooterLinks isMatch={isMatch} />
    </>
  );
};

export default Contacts;
