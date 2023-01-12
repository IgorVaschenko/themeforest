import { tagsList } from 'mocks';
export type Props = {
  setTagList?: (value: string) => void;
  tags: typeof tagsList;
  pointer?: string;
};
