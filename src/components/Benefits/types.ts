export type Props = {
  benefits: Array<{
    id?: string;
    icon: string;
    title: string;
    subtitle: string;
  }>;
  variant: 'home' | 'solutions';
};
