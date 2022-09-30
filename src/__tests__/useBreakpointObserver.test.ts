import { useBreakpointObserver } from '../index';
test('My useBreakpointObserver', () => {
  expect(useBreakpointObserver('Carl')).toBe('Hello Carl');
});
