import { useCallback, useState } from 'react';

type ReturnType<T> = [Array<T>, () => void, () => void, boolean, boolean];

export const usePagination = <T>(items: Array<T>, showCount: number): ReturnType<T> => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(showCount);

  const handleBackward = useCallback(() => {
    setStart((prev) => (prev === 0 ? prev : prev - 1));
    setEnd((prev) => (prev === showCount ? prev : prev - 1));
  }, [showCount]);

  const handleForward = useCallback(() => {
    setStart((prev) => (prev === items.length - showCount ? prev : prev + 1));
    setEnd((prev) => (prev === items.length ? prev : prev + 1));
  }, [items.length, showCount]);

  const result = items.slice(start, end);
  const isStart = start === 0;
  const isEnd = end === items.length;

  return [result, handleBackward, handleForward, isStart, isEnd];
};
