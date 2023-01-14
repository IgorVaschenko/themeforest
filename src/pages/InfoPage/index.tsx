import { Navigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import useMatch from 'hooks/useMatch';
import { servicesInfo, solutionInfo } from 'mocks';
import { getPageUrl, Paths } from 'routes';
import { themeParams } from 'theme';
import { TfHeadline, TfIcons, TfParagraph } from 'themeforest-design-system-react';

import Breadcrumbs from 'components/Breadcrumbs';
import FooterLinks from 'components/FooterLinks';
import Subscribe from 'components/Subcribe';

import { InfoHeader } from './styled';
import { ItemProps } from './types';

export const getItemProps = (item: ItemProps) =>
  item.id
    ? {
        title: item.title,
        subtitle: item.subtitle,
        icon: item.icon,
        image: '',
      }
    : {
        title: item.title,
        subtitle: item.subtitle,
        icon: '',
        image: item.image,
      };

const InfoPage = () => {
  const { id: infoId } = useParams();
  const item = infoId?.includes('sol')
    ? solutionInfo.find(({ id }) => id === infoId)
    : servicesInfo.find(({ link }) => link === infoId);
  const { isMatch } = useMatch();

  if (!item) return <Navigate to={getPageUrl(Paths.NOT_FOUND)} />;

  const getItemProps = (item: ItemProps) =>
    item.id
      ? {
          title: item.title,
          subtitle: item.subtitle,
          icon: item.icon,
          image: '',
        }
      : {
          title: item.title,
          subtitle: item.subtitle,
          icon: '',
          image: item.image,
        };

  const { title, subtitle, icon, image } = getItemProps(item);

  return (
    <>
      <InfoHeader isMatch={isMatch}>
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
                <TfHeadline variant="h1">{title}</TfHeadline>
              </Grid>

              <Grid item md={6} xs={10}>
                <Breadcrumbs current={title} color={themeParams.colors.black} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
      </InfoHeader>

      <Grid container mt={5}>
        <Grid item md={3} xs={1} />
        <Grid item md={6} xs={10}>
          <Grid container direction="column" alignItems="center" mr={5}>
            <TfIcons iconName={icon || image} />
            <TfParagraph variant={isMatch ? 'p3' : 'p1'} component="p" color="#9497A1">
              {subtitle}
            </TfParagraph>
          </Grid>
        </Grid>
        <Grid item md={3} xs={1} />
      </Grid>

      <Subscribe isMatch={isMatch} />
      <FooterLinks isMatch={isMatch} />
    </>
  );
};

export default InfoPage;
