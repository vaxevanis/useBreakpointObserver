export type AppContextProps = {
  isMobile: boolean;
};

export type BreakPointsType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type BreakSizesType = {
  [key in BreakPointsType]?: number;
};
