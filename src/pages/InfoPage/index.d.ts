import { ItemProps } from './types';
export declare const getItemProps: (item: ItemProps) =>
  | {
      title: string;
      subtitle: string;
      icon: string | undefined;
      image: string;
    }
  | {
      title: string;
      subtitle: string;
      icon: string;
      image: string | undefined;
    };
declare const InfoPage: () => JSX.Element;
export default InfoPage;
