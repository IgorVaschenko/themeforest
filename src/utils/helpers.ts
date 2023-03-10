import { blogInfo } from 'mocks';
import { FormFieldData, InitialFormValues } from 'types';

const sortByRate = (a: { rate: string }, b: { rate: string }) => +b.rate - +a.rate;

export const getPopularNews = (news: typeof blogInfo, filterId: string) =>
  news
    .filter(({ id }) => id !== filterId)
    .sort(sortByRate)
    .slice(0, 3);

export const getRelatedNews = (news: typeof blogInfo, filterId: string, filterTags: string[]) =>
  news
    .filter(({ tags, id }) => tags.some((tag) => filterTags.includes(tag)) && id !== filterId)
    .sort(sortByRate)
    .slice(0, 3);

export const getPostsTitle = (variant: string) => {
  switch (variant) {
    case 'popular':
      return 'Popular posts';
    case 'related':
      return 'Related posts';
    default:
      return null;
  }
};
export const parseDuration = (value: string) => {
  switch (value) {
    case 'Mo':
      return '1 month';
    case 'Yr':
      return '1 year';
    default:
      return '';
  }
};

export const reduceFieldsName = (array: FormFieldData[]) =>
  array.reduce<InitialFormValues>((acc, { name }) => {
    acc[name] = '';
    return acc;
  }, {});

export const parsePriceValue = (value: string) => {
  switch (value) {
    case 'Custom':
      return '0.01';
    case '$00':
      return '0.01';
    default:
      return Number(value.replace(/[^0-9]/, '')).toString();
  }
};
