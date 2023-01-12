import { Component, ReactNode } from 'react';
type Props = {
  children: ReactNode;
  fallback: string;
};
type State = {
  error: boolean;
};
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props);
  static getDerivedStateFromError(): {
    error: boolean;
  };
  render():
    | string
    | number
    | boolean
    | import('react').ReactFragment
    | JSX.Element
    | null
    | undefined;
}
export {};
