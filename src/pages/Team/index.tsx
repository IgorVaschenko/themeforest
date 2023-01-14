import { useRef, useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import useMatch from 'hooks/useMatch';

import { teamInfo } from 'mocks';

import { themeParams } from 'theme';

import { TfHeadline, TfParagraph } from 'themeforest-design-system-react';

import Breadcrumbs from 'components/Breadcrumbs';
import FooterLinks from 'components/FooterLinks';
import Subscribe from 'components/Subcribe';
import TeamBox from 'components/TeamBox';

import { LastElement } from './styled';

const Team = () => {
  const { isMatch } = useMatch();
  const [desktopCount, setDesktopCount] = useState(9);
  const [mobileCount, setMobileCount] = useState(6);
  const lastElement = useRef<HTMLElement>(null);

  useEffect(() => {
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        isMatch ? setMobileCount((prev) => prev + 3) : setDesktopCount((prev) => prev + 3);
      }
    };
    const observer = new IntersectionObserver(callbackFunction);
    if (lastElement.current) observer.observe(lastElement?.current);
  }, [isMatch]);
  return (
    <>
      <Grid container pt={5} sx={{ backgroundColor: `${themeParams.colors.secondary}` }}>
        <Grid item xs={2} />
        <Grid item md={8} xs={10}>
          <Breadcrumbs current="Our team" color={themeParams.colors.white} />
        </Grid>
        <Grid item md={2} xs={1} />

        <Grid container>
          <Grid item md={2} xs={1} />
          <Grid item md={8} xs={10}>
            <Grid container justifyContent="space-between" alignItems="center" mt={5} mb={5}>
              <Grid item md={7} xs={12}>
                <TfHeadline
                  variant={isMatch ? 'h3' : 'h1'}
                  component="p"
                  color={themeParams.colors.white}
                >
                  Our team
                </TfHeadline>
              </Grid>
              <Grid item md={5} xs={12}>
                <TfParagraph variant={isMatch ? 'p3' : 'p2'} color={themeParams.colors.grey}>
                  Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
                  laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
                  consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus.
                  Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis
                  lobortis eros. Fusce id commodo libero.
                </TfParagraph>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </Grid>
          <Grid item md={2} xs={1} />
        </Grid>
      </Grid>

      <TeamBox persons={teamInfo} count={isMatch ? mobileCount : desktopCount} isMatch={isMatch} />
      <LastElement ref={lastElement as React.RefObject<HTMLDivElement>} />
      <Subscribe isMatch={isMatch} />
      <FooterLinks isMatch={isMatch} />
    </>
  );
};

export default Team;
