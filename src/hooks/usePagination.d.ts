type ReturnType<T> = [Array<T>, () => void, () => void, boolean, boolean];
export declare const usePagination: <T>(items: T[], showCount: number) => ReturnType<T>;
export {};
