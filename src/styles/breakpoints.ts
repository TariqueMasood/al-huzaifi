enum Breakpoints {
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}

export type BreakpointName = keyof typeof Breakpoints;

const createMatcher = (size: BreakpointName): string => {
  return `(min-width: ${Breakpoints[size]}px)`;
};

export const matchBreakpoint = (size: BreakpointName): boolean => {
  if (typeof matchMedia !== "function") return false;
  return matchMedia(createMatcher(size)).matches;
};

export const mq = (size: BreakpointName): string =>
  `@media ${createMatcher(size)}`;
