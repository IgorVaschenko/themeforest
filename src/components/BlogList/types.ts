import { blogInfo } from 'mocks';

export type Props = {
  setTag?: (value: string) => void;
  isMatch: boolean;
  news: typeof blogInfo;
  listDirection: 'row' | 'column';
  newsVariant: 'home' | 'blog' | 'related' | 'popular';
};
