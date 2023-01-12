import { Paths, getPageUrl } from 'routes';

import { TfCard } from 'themeforest-design-system-react';

import { TestimonialCard } from './styled';
import { Props } from './types';

const Testimonial = ({ image, title, position, comment, isMatch, count }: Props) => {
  return (
    <TestimonialCard key={title} to={getPageUrl(Paths.TEAM)}>
      <TfCard
        key={title}
        view={isMatch || count < 2 ? 'reviews_mob' : 'reviews'}
        variant="inside"
        image={image}
        title={title}
        position={position}
        subtitle={comment}
      ></TfCard>
    </TestimonialCard>
  );
};

export default Testimonial;
