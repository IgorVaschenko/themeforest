export declare const useBlogOptions: <T>(
  news: T[],
  variant: string
) => {
  portion: T[];
  isButton: boolean;
  title: string | null;
  sectionVariant: 'none' | 'fenced';
  setPage: import('react').DispatchWithoutAction;
};
