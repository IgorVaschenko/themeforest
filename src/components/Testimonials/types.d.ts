import { testimonials } from 'mocks';
export type Props = {
  title: string;
  count: number;
  isMatch: boolean;
  testimonials: Array<{
    image: string;
    title: string;
    position: string;
    comment: string;
  }>;
};
export type showPersonsProps = {
  props: typeof testimonials;
};
