import { useEffect, useState } from "react";

import { BreakpointName, matchBreakpoint } from "../styles/breakpoints";

export default function useViewportWidth(breakpoint?: BreakpointName): boolean {
  const bp = breakpoint || "lg";
  const initialState = matchBreakpoint(bp);
  const [doesMatch, setDoesMatch] = useState(initialState);
  useEffect(() => {
    function onResize() {
      const _doesMatch = matchBreakpoint(bp);
      setDoesMatch(_doesMatch);
    }
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [bp, setDoesMatch]);
  return doesMatch;
}
