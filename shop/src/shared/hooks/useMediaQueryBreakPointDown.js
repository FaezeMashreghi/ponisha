import { useMediaQuery, useTheme } from "@mui/material";
import { SMALL_SIZE } from "../constants/screenSize";

export const useMediaQueryBreakPointDown = (breakpoint = SMALL_SIZE) => {
  const muiTheme = useTheme();
  return useMediaQuery(muiTheme.breakpoints.down(breakpoint));
};
