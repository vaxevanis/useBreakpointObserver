# useBreakpointsObserver()

<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/use-breakpoint-observer">

🐜 Tiny size
🦄 Written in Typescript
😎 No timeouts or `window.resize`

> A React hook that allows you to use a ResizeObserver and gives you access to the currently active breakpoint and the width dimension of the targeted html element or body

🤸‍♂️ For a Running Demo click [here](https://paulv.gr/usebreakpointsobserver/)

## Install

```bash
npm install use-breakpoint-observer
```

```bash
yarn add use-breakpoint-observer
```

## Basic Usage

```jsx
import React from 'react';
import useBreakpointsObserver from './useBreakpointsObserver';

// Define the minimum width for each specific breakpoint name
const breakPointSizes = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

const App = () => {
  let observeRef = useRef(null);

  // call the Hook
  const [breakSize, width] = useBreakpointsObserver(
    observeRef,
    breakPointSizes,
  );

  return (
    <div ref={observeRef}>
      <p>
        Breakpoint is: {breakSize}
        <br />
        Width is: {width}
      </p>
    </div>
  );
};
```

#### Note: Pass a `null` htmlRef prop to observe the body element:

```jsx
const [breakSize, width] = useBreakpointsObserver(null, breakPointSizes);
```

## API

### useResizeObserver(htmlRef, breakpoints)

```ts

const useBreakpointsObserver = <T extends HTMLElement>(
  htmlRef: React.RefObject<T> | null,
  breakpoints: BreakSizesType,
): [BreakPointsType, number | null]

```

| Argument    | Type                                        | Required? | Description                                                                 |
| ----------- | ------------------------------------------- | --------- | --------------------------------------------------------------------------- |
| htmlRef     | <code>React.RefObject<T> &#124; null</code> | Yes       | A React ref created by `useRef()` or `null`to observe the HTML body element |
| breakpoints | <code>BreakSizesType</code> (Object)        | Yes       | An Object that defines the minimum width for each specific breakpoint name  |

## Types

### breakpoints

```ts
export type BreakSizesType = {
  [key in BreakPointsType]?: number;
};

export type BreakPointsType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

## LICENSE

MIT
