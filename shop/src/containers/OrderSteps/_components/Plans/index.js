import {
  orderPlaned,
  PLANS_DURATION_MONTHLY,
  PLANS_DURATION_Yearly,
} from "../../../../shared/constants/orderPlaned";
import { SelectableCard } from "../../../../components/SelectableCard";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Switch } from "../../../../components/Switch";
import { useState } from "react";

export const Plans = () => {
  const [planDuration, setPlanDuration] = useState(PLANS_DURATION_Yearly);
  const [selectedCardId,setSelectedCardId]=useState('')
  const handleSelectedCardClick = (id) => {setSelectedCardId(id)};
  const handleSwitchChange = (_e, checked) => {
    setPlanDuration(checked ? PLANS_DURATION_Yearly : PLANS_DURATION_MONTHLY);
  };
  return (
      <Box sx={{ py: 3, px: 5 }}>
      <Typography variant="h3" mt={3} mb={2}>
        Select your plan
      </Typography>
      <Typography variant="caption">
        You have the option of monthly or yearly billing
      </Typography>
      <Grid container spacing={2} mt='3' >
        {orderPlaned.map(({ title, description, price, srcImage, id }) => (
          <Grid item sc={12} sm={4} key={id}>
            <SelectableCard
              src={srcImage}
              title={title}
              id={id}
              description={
                planDuration === PLANS_DURATION_Yearly ? description : ""
              }
              label={`$${price[planDuration]}/${planDuration===PLANS_DURATION_MONTHLY?'mo':'yr'}`}
              onSelectedCardClick={handleSelectedCardClick}
              selected={selectedCardId===id}
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
      </Box>
  );
};
