import { useState, useCallback } from 'react';

import { Grid } from '@mui/material';
import useMatch from 'hooks/useMatch';
import { faqInfo } from 'mocks';
import { themeParams } from 'theme';
import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import Breadcrumbs from 'components/Breadcrumbs';

import FaqItem from 'components/FaqItem';
import Footer from 'components/Footer';

const Faq = () => {
  const { isMatch } = useMatch();

  const [activeId, setActiveId] = useState('');

  const handleClickDropdown = useCallback(
    (id: string) => () => setActiveId((prev) => (prev === id ? '' : id)),
    []
  );
  return (
    <>
      <Grid container mt={3}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Breadcrumbs current="FAQs" color={themeParams.colors.black} />
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
              <TfHeadline variant="h6" color={themeParams.colors.primary}>
                FAQs
              </TfHeadline>
            </Grid>
            <Grid item>
              <TfHeadline variant={isMatch ? 'h3' : 'h1'}>Frequently asked questions</TfHeadline>
            </Grid>
            <Grid item>
              <TfParagraph variant={isMatch ? 'p3' : 'p1'} color={themeParams.colors.greyText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam.
              </TfParagraph>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} xs={1} />
      </Grid>

      <Grid container mt={10} mb={10}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          {faqInfo.map(({ id, ...props }) => (
            <FaqItem
              key={id}
              {...props}
              isActive={activeId === id}
              handleClick={handleClickDropdown(id)}
            />
          ))}
        </Grid>
        <Grid item xs={2} />
      </Grid>

      <Footer isMatch={isMatch} />
    </>
  );
};

export default Faq;
