import { blogInfo } from 'mocks';
import { FormFieldData, InitialFormValues } from 'types';
export declare const getPopularNews: (
  news: typeof blogInfo,
  filterId: string
) => {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  paragraph: string;
  link: string;
  tags: string[];
  data: string;
  rate: string;
  author: string;
}[];
export declare const getRelatedNews: (
  news: typeof blogInfo,
  filterId: string,
  filterTags: string[]
) => {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  paragraph: string;
  link: string;
  tags: string[];
  data: string;
  rate: string;
  author: string;
}[];
export declare const getPostsTitle: (variant: string) => 'Popular posts' | 'Related posts' | null;
export declare const parseDuration: (value: string) => '' | '1 month' | '1 year';
export declare const reduceFieldsName: (array: FormFieldData[]) => InitialFormValues;
export declare const parsePriceValue: (value: string) => string;
