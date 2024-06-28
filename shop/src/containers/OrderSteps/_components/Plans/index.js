import {
  orderPlaned,
  PLANS_DURATION_MONTHLY,
  PLANS_DURATION_Yearly,
} from "../../../../shared/constants/orderPlaned";
import { PlansCard } from "../../../../components/PlansCard";
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
    <div className="py-32 px-64">
      <Typography variant="h3" className="mb-16 mt-32">
        personal info
      </Typography>
      <Typography variant="caption">
        please provide your name,email address, and phone number
      </Typography>
      <Grid container spacing={2} className="mt-32">
        {orderPlaned.map(({ title, description, price, srcImage, id }) => (
          <Grid item sc={12} sm={4} key={id}>
            <PlansCard
              src={srcImage}
              title={title}
              id={id}
              description={
                planDuration === PLANS_DURATION_Yearly ? description : ""
              }
              price={`$${price[planDuration]}/${planDuration===PLANS_DURATION_MONTHLY?'mo':'yr'}`}
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
    </div>
  );
};
