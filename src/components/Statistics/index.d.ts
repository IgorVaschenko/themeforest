import { Statistic } from 'types';
type Props = {
  statistics: Statistic[];
  isMatch: boolean;
  short?: boolean;
};
declare const Statistics: ({ statistics, isMatch, short }: Props) => JSX.Element;
export default Statistics;
