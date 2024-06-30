import { Box, Grid, Paper } from "@mui/material";
import { Plans } from "./_components/Plans";
import { AddOns } from "./_components/AddOns";
import { PersonalInfo } from "./_components/PersonalInfo";
import { useState } from "react";
import { Summary } from "./_components/Summary";
import { ThankYou } from "./_components/ThankYou";
import { useMediaQueryBreakPointDown } from "../../shared/hooks/useMediaQueryBreakPointDown";
import Steps from "./_components/Steps";

const slidesComponents = [PersonalInfo, Plans, AddOns, Summary, ThankYou];
export const OrderSteps = () => {
  const isMobileScreen = useMediaQueryBreakPointDown();
  const [slideIndex, setSlideIndex] = useState(0);
  const handNextButtonClick = () => {
    setSlideIndex(slideIndex + 1);
  };
  const handBackButtonClick = () => {
    setSlideIndex(slideIndex - 1);
  };
  const CurrentSlide = slidesComponents[slideIndex];
  return (
    <div>
      <Box
        sx={
          isMobileScreen && {
            backgroundImage: "url(/static/images/bg-sidebar-mobile.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize:'cover',
            height: "170px",
            p: 2,
          }
        }
      >
        {isMobileScreen && (
          <Steps
            onNextButtonClick={handNextButtonClick}
            onBackButtonClick={handBackButtonClick}
          />
        )}
        <Box sx={{ maxWidth: "900px", margin: "48px auto" }}>
          <Paper>
            <Grid container>
              <Grid item xs={12} sm={4}>
                {!isMobileScreen && (
                  <Box
                    sx={{
                      m: 2,
                      height: "572px",
                      backgroundImage:
                        "url(/static/images/bg-sidebar-desktop.svg)",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <Steps activeStep={slideIndex + 1} isVertical={true} />
                    </div>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box sx={{ py: 3, px: 5 }}>
                  <CurrentSlide
                    onNextButtonClick={handNextButtonClick}
                    onBackButtonClick={handBackButtonClick}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};
