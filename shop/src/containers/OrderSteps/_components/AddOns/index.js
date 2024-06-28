import Typography from "@mui/material/Typography";

import { CheckBoxCard } from "../../../../components/CheckBoxCard";
import {
  addOnOptions,
  ADDONS_LARGER_STORAGE,
  ADDONS_ONLINE_SERVICE,
} from "../../../../shared/constants/addOn";
import { useState } from "react";
import { Box } from "@mui/material";

const initialAddOns = {
  [ADDONS_ONLINE_SERVICE]: false,
  [ADDONS_LARGER_STORAGE]: false,
  ADDONS_CUSTOMIZE_PROFILE: false,
};
export const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState(initialAddOns);
  const handleCardChecked = (id) => {
    setSelectedAddOns((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <Box sx={{ py: 3, px: 5 }}>
      <Typography variant="h3" mt={3} mb={2}>
        Pick add-ons
      </Typography>
      <Typography variant="caption">
        Add-ons help enhance your gaming experience.
      </Typography>
      {addOnOptions.map(({ title, description, id }) => (
        <Box sx={{ mt: 2 }}>
          <CheckBoxCard
            label={title}
            id={id}
            checked={selectedAddOns[id]}
            description={description}
            onCardCheck={handleCardChecked}
            //todo fix this with year
            rightLabel={`90000`}
          />
        </Box>
      ))}
    </Box>
  );
};
