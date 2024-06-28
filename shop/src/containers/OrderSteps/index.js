import { Box,  Grid, Paper } from "@mui/material";
import { Plans } from "./_components/Plans";
import { AddOns } from "./_components/AddOns";
import { PersonalInfo } from "./_components/PersonalInfo";
import { useState } from "react";
import { Summary } from "./_components/Summary";
import {ThankYou} from "./_components/ThankYou";

const slides = [PersonalInfo, Plans, AddOns, Summary,ThankYou];
export const OrderSteps = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handNextButtonClick = () => {
    setSlideIndex(slideIndex + 1);

  };
  const handBackButtonClick = () => {
    setSlideIndex(slideIndex - 1);
  };
  const Slide = slides[slideIndex];
  return (
    <Box sx={{ maxWidth: "900px", margin: "48px auto" }}>
      <Paper>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <img src="/static/images/bg-sidebar-desktop.svg" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{ py: 3, px: 5 }}>
              <Slide
                onNextButtonClick={handNextButtonClick}
                onBackButtonClick={handBackButtonClick}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
