export type Props = {
  toggleDrawer?: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  theme?: 'dark' | 'light';
};
