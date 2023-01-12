import { prices } from 'mocks';
export * from './hooks';
export * from './props';
export type Statistic = {
  info: string;
  label: string;
};
export type Props = {
  isMatch: boolean;
};
export type ClientStat = {
  label: string;
  info: string;
};
export type InitialFormValues = {
  [key: string]: string;
};
export type FormFieldData = {
  [key: string]: string;
  label: string;
  name: string;
  text: string;
  placeholder: string;
  type: string;
};
export type PriceInfo = (typeof prices)[0];
