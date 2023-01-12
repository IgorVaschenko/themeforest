import { statistics } from 'constants/statistics';

import Grid from '@mui/material/Grid';

import useMatch from 'hooks/useMatch';
import { clients, contacts, testimonials } from 'mocks';
import { Banner, theme, themeParams } from 'theme';
import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import Breadcrumbs from 'components/Breadcrumbs';
import Clients from 'components/Clients';
import ContactForm from 'components/ContactForm';
import FooterLinks from 'components/FooterLinks';

import Statistics from 'components/Statistics';

import Subscribe from 'components/Subcribe';

import Testimonials from 'components/Testimonials';

import { AboutHeader } from './styled';

const About = () => {
  const { isMatch } = useMatch();
  return (
    <>
      <AboutHeader isMatch={isMatch}>
        <Grid
          container
          direction="column"
          alignItems={isMatch ? 'flex-start' : 'center'}
          pt={3}
          ml={7}
        >
          {!isMatch && (
            <Grid item md={6} xs={10}>
              <TfHeadline variant="h1">About Us</TfHeadline>
            </Grid>
          )}
          <Grid item md={6} xs={10}>
            <Breadcrumbs current="About Us" color={themeParams.colors.black} />
          </Grid>
        </Grid>
      </AboutHeader>

      <Grid
        container
        mb={7}
        mt={isMatch ? 0 : 7}
        sx={{ textAlign: isMatch ? 'center' : 'inherit' }}
      >
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container spacing={5} alignItems="flex-start" justifyContent="center">
            <Grid item md={5} xs={9}>
              <Grid
                container
                alignItems="flex-start"
                justifyContent={isMatch ? 'center' : 'flex-start'}
              >
                {isMatch && (
                  <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                      <TfHeadline variant="h6" color={themeParams.colors.primary}>
                        About Us
                      </TfHeadline>
                    </Grid>
                  </Grid>
                )}
                <Grid item>
                  <TfHeadline variant={isMatch ? 'h3' : 'h1'} component="p">
                    Who we are
                  </TfHeadline>
                </Grid>
                <Grid item xs={12}>
                  <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec tincidunt
                    tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
                    pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien,
                    consequat et dolor vel, cursus lacinia lectus.
                  </TfParagraph>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={7} xs={11} alignSelf="center">
              <Banner
                width={isMatch ? '360' : ''}
                height={isMatch ? '210' : '425'}
                image={isMatch ? 'home-half_sm' : 'about_1'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      {!isMatch && (
        <Grid container mt={7} mb={7}>
          <Grid item md={2} xs={1} />
          <Grid item md={8} xs={10}>
            <Grid container spacing={5} alignItems="flex-start">
              <Grid item md={7} xs={12} alignSelf="flex-end">
                <Banner
                  width={isMatch ? '360' : ''}
                  height={isMatch ? '210' : '425'}
                  image="about_2"
                />
              </Grid>
              <Grid item md={5} xs={12}>
                <Grid container alignItems="flex-start">
                  <Grid item>
                    <TfHeadline variant="h1" component="p">
                      Our mission
                    </TfHeadline>
                  </Grid>
                  <Grid item xs={12}>
                    <TfParagraph
                      variant={isMatch ? 'p3' : 'p1'}
                      color={theme.palette.secondary.main}
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec
                      tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat
                      felis vel pretium.
                    </TfParagraph>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} xs={1} />
        </Grid>
      )}

      <Grid container pt={5} pb={5} sx={{ backgroundColor: `${themeParams.colors.grey}` }}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <TfHeadline variant={isMatch ? 'h3' : 'h2'} component="p">
                Ensome in numbers
              </TfHeadline>
            </Grid>

            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Statistics statistics={statistics} isMatch={isMatch} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid
        container
        mb={7}
        mt={isMatch ? 0 : 7}
        sx={{ textAlign: isMatch ? 'center' : 'inherit' }}
      >
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid
            container
            spacing={5}
            alignItems="flex-start"
            justifyContent={!isMatch ? 'flex-start' : 'center'}
          >
            <Grid item md={5} xs={9}>
              <Grid
                container
                alignItems="flex-start"
                justifyContent={isMatch ? 'center' : 'flex-start'}
              >
                <Grid item>
                  <TfHeadline variant={isMatch ? 'h3' : 'h1'} component="p">
                    Our customers
                  </TfHeadline>
                </Grid>
                <Grid item xs={12}>
                  <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudan, totam rem aperiam.
                  </TfParagraph>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Clients clients={clients} isMatch={isMatch} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid container mb={isMatch ? 3 : 0}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Testimonials
            count={2}
            title={isMatch ? 'Testimonials' : '"What our customers say"'}
            isMatch={isMatch}
            testimonials={testimonials}
          />
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>

      <Grid
        container
        mb={7}
        mt={isMatch ? 0 : 7}
        sx={{
          textAlign: isMatch ? 'center' : 'inherit',
          backgroundColor: `${themeParams.colors.grey}`,
        }}
      >
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container alignItems="center" justifyContent={!isMatch ? 'flex-start' : 'center'}>
            <Grid item md={5} xs={9}>
              <Grid container alignItems="flex-start" justifyContent="space-between">
                <Grid item>
                  <TfHeadline variant={isMatch ? 'h3' : 'h1'} component="p">
                    Left questions? Contacts us now for a free consultation and free trial!
                  </TfHeadline>
                </Grid>
                <Grid item xs={12}>
                  <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={theme.palette.secondary.main}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudan, totam rem aperiam.
                  </TfParagraph>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="column" justifyContent="flex-start">
                    {contacts.map(({ info, label }) => (
                      <Grid item key={info}>
                        <TfParagraph
                          variant="p2"
                          color={theme.palette.secondary.main}
                          style={{ marginBottom: '-25px' }}
                        >
                          {label}
                        </TfParagraph>
                        <TfParagraph variant="p2-b" color={themeParams.colors.black}>
                          {info}
                        </TfParagraph>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2} />
            <Grid
              item
              md={5}
              p={2}
              mb={2}
              xs={9}
              sx={{ backgroundColor: `${themeParams.colors.white}`, borderRadius: '12px' }}
            >
              <ContactForm variant="standard" />
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

export default About;
