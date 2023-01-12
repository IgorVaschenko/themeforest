import FooterLinks from 'components/FooterLinks';

import Help from 'components/Help';
import Subscribe from 'components/Subcribe';

import { Props } from './types';

const Footer = ({ isMatch }: Props) => {
  return (
    <>
      <Help isMatch={isMatch} />
      <Subscribe isMatch={isMatch} />
      <FooterLinks isMatch={isMatch} />
    </>
  );
};

export default Footer;
