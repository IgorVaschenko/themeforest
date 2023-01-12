import { routes } from 'routes';
export type NavBarProps = {
  routes: typeof routes;
  direction?: 'row' | 'column';
};
