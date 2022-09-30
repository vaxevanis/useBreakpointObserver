global.ResizeObserver = require('resize-observer-polyfill');
import { useBreakpointsObserver } from '../index';
import { renderHook, act } from '@testing-library/react';

test('useBreakpointsObserver: test empty Object', () => {
  const { result } = renderHook(() => useBreakpointsObserver(null, {}));
  expect(result.current).toStrictEqual([undefined, null]);
});
