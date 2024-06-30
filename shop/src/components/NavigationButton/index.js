import { Box, Button } from "@mui/material";
import { SMALL_SIZE } from "../../shared/constants/screenSize";
import { useTheme } from "@mui/material/styles";

export const NavigationButton = ({
  PrimaryButtonProps,
  PrimaryButtonLabel = "",
  secondaryButtonProps,
  secondaryButtonLabel = "",
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        mt: "80px",
        [theme.breakpoints.down(SMALL_SIZE)]: {
          backgroundColor: "white",
          position: "fixed",
          bottom: "0",
          left: "0",
          p: 2,
        },
      }}
    >
      <Button {...PrimaryButtonProps} variant="contained">
        {PrimaryButtonLabel}
      </Button>
      {secondaryButtonLabel && (
        <Button {...secondaryButtonProps}>{secondaryButtonLabel}</Button>
      )}
    </Box>
  );
};
