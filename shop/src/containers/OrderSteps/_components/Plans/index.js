import {
  orderPlaned,
  PLANS_DURATION_MONTHLY,
  PLANS_DURATION_Yearly,
} from "../../../../shared/constants/orderPlaned";
import { SelectableCard } from "../../../../components/SelectableCard";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Switch } from "../../../../components/Switch";
import { useDispatch, useSelector } from "react-redux";
import {
  setDuration,
  setPlan,
} from "../../../../features/shopInfo/shopInfoSlice";

export const Plans = ({ onNextButtonClick, onBackButtonClick }) => {
  const dispatch = useDispatch();
  const { planDuration, selectedPlane } = useSelector(
    (state) => state.shopInfo,
  );

  const handleSelectedCardClick = (id) => {
    dispatch(setPlan(id));
  };
  const handleSwitchChange = (_e, checked) => {
    dispatch(
      setDuration(checked ? PLANS_DURATION_Yearly : PLANS_DURATION_MONTHLY),
    );
  };
  return (
    <>
      <Typography variant="h3" mt={3} mb={2}>
        Select your plan
      </Typography>
      <Typography variant="caption">
        You have the option of monthly or yearly billing
      </Typography>
      <Grid container spacing={2} mt="3">
        {orderPlaned.map(({ title, description, price, srcImage, id }) => (
          <Grid item sc={12} sm={4} key={id}>
            <SelectableCard
              src={srcImage}
              title={title}
              id={id}
              description={
                planDuration === PLANS_DURATION_Yearly ? description : ""
              }
              label={`$${price[planDuration]}/${planDuration}`}
              onSelectedCardClick={handleSelectedCardClick}
              selected={selectedPlane === id}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: "#ebebed",
          width: "100%",
          p: 1,
          borderRadius: "8px",
          mt: 2,
        }}
      >
        <Switch
          leftLabel="Monthly"
          rightLabel="Yearly"
          onChange={handleSwitchChange}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button onClick={onBackButtonClick}>go back</Button>

          <Button onClick={onNextButtonClick} variant="contained" disabled={!selectedPlane}>
          next step
        </Button>
      </Box>
    </>
  );
};
