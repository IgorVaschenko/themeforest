import { DispatchWithoutAction } from 'react';
export declare const usePortionedPagination: <T>(
  array: T[],
  maxCount: number
) => [T[], DispatchWithoutAction];
