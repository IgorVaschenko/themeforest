export declare const enum Paths {
  BASE = '/',
  ROOT = '/',
  HOME = 'home',
  BLOG = 'blog',
  SERVICES = 'services',
  SOLUTIONS = 'solutions',
  FAQ = 'faq',
  CONTACTS = 'contacts',
  ABOUT = 'about',
  TEAM = 'team',
  NOT_FOUND = '404',
}
export declare const getPageUrl: (path: Paths) => string;
export declare const getNewsUrl: (id: string) => string;
export declare const routes: (
  | {
      path: string;
      element: JSX.Element;
      label: string;
      isNav: boolean;
    }
  | {
      path: string;
      element: JSX.Element;
      label?: undefined;
      isNav?: undefined;
    }
)[];
export declare const additionalRoutes: {
  path: string;
  element: JSX.Element;
  label: string;
  isNav: boolean;
}[];
