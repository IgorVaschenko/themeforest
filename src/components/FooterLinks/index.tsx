import { NavLink } from 'react-router-dom';

import React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { contacts } from 'mocks/contacts';
import { socials } from 'mocks/socials';

import { Paths, routes, additionalRoutes } from 'routes';

import { themeParams } from 'theme';
import { TfHeadline, TfIcons, TfLink, TfParagraph } from 'themeforest-design-system-react';

import { Props } from 'types';

import FooterLinksMob from 'components/FooterLinksMob';

const FooterLinks = ({ isMatch }: Props) => {
  return (
    <>
      {isMatch ? (
        <FooterLinksMob />
      ) : (
        <Grid
          container
          sx={{ backgroundColor: `${themeParams.colors.secondary}` }}
          justifyContent="center"
          mb={3}
        >
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Grid container mt={5} mb={5}>
              <Grid item md={3}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <NavLink to={Paths.BASE}>
                      <TfIcons iconName="logo_white" />
                    </NavLink>
                  </Grid>
                  <Grid item xs={12}>
                    <TfParagraph variant="p3" color={themeParams.colors.greyText}>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                      laboriosam, nisi ut aliquid ex ea commodi.
                    </TfParagraph>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      {socials.map(({ image, href }) => (
                        <Grid item key={href}>
                          <TfLink href={href} target="_blank">
                            <TfIcons iconName={image} />
                          </TfLink>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container justifyContent="space-evenly">
                  <Grid item>
                    <Grid item>
                      <TfHeadline color={themeParams.colors.white} variant="h6" component="p">
                        Quick Link
                      </TfHeadline>
                    </Grid>
                    <Grid container direction="column" color={themeParams.colors.greyText}>
                      {routes
                        .filter(({ isNav }) => isNav)
                        .map(({ path, label }) => (
                          <React.Fragment key={path}>
                            <NavLink to={path} style={{ margin: '-10px 0' }}>
                              <TfParagraph variant="p3" component="p">
                                {label}
                              </TfParagraph>
                            </NavLink>
                          </React.Fragment>
                        ))}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <TfHeadline color={themeParams.colors.white} variant="h6" component="p">
                        Service
                      </TfHeadline>
                    </Grid>
                    <Grid container direction="column" color={themeParams.colors.greyText}>
                      {additionalRoutes
                        .filter((isNav) => isNav)
                        .map(({ path, label }) => (
                          <React.Fragment key={label}>
                            <NavLink to={path} style={{ margin: '-10px 0' }}>
                              <TfParagraph variant="p3" component="p">
                                {label}
                              </TfParagraph>
                            </NavLink>
                          </React.Fragment>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column" sx={{ color: `${themeParams.colors.greyText}` }}>
                  <Grid item>
                    <TfHeadline color={themeParams.colors.white} variant="h6" component="p">
                      Contact info
                    </TfHeadline>
                  </Grid>
                  <Grid item>
                    {contacts.map(({ info }) => (
                      <TfParagraph
                        key={info}
                        variant="p3"
                        color={themeParams.colors.greyText}
                        style={{ margin: '-10px 0' }}
                      >
                        {info}
                      </TfParagraph>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider color={themeParams.colors.helperBlue2} />
            <Grid container mt={5} mb={5} sx={{ color: `${themeParams.colors.greyText}` }}>
              <Grid xs={9} item>
                <TfParagraph variant="p3" color={themeParams.colors.greyText}>
                  Ensome© 2022 All Rights Reserved
                </TfParagraph>
              </Grid>
              <Grid xs={2} item>
                <TfParagraph variant="p3" color={themeParams.colors.greyText}>
                  Privacy policy
                </TfParagraph>
              </Grid>
              <Grid xs={1} item>
                <TfParagraph variant="p3" color={themeParams.colors.greyText}>
                  Terms of us
                </TfParagraph>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      )}
    </>
  );
};

export default FooterLinks;
