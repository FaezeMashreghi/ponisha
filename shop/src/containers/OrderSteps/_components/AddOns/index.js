import Typography from "@mui/material/Typography";

import { CheckBoxCard } from "../../../../components/CheckBoxCard";
import { addOnOptions } from "../../../../shared/constants/addOn";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAddOns } from "../../../../features/shopInfo/shopInfoSlice";

export const AddOns = ({ onNextButtonClick, onBackButtonClick }) => {
  const dispatch = useDispatch();
  const { addOns, planDuration } = useSelector((state) => state.shopInfo);
  const handleCardChecked = (id, checked) => {
    dispatch(setAddOns({ [id]: !checked }));
  };
  return (
    <>
      <Typography variant="h3" mt={3} mb={2}>
        Pick add-ons
      </Typography>
      <Typography variant="caption">
        Add-ons help enhance your gaming experience.
      </Typography>
      {addOnOptions.map(({ title, description, id, price }) => (
        <Box sx={{ mt: 2 }}>
          <CheckBoxCard
            label={title}
            id={id}
            checked={addOns[id]}
            description={description}
            onCardCheck={handleCardChecked}
            rightLabel={`$${price[planDuration]}/${planDuration}`}
          />
        </Box>
      ))}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button onClick={onNextButtonClick} variant="contained">
          next step
        </Button>
        <Button onClick={onBackButtonClick}>go back</Button>
      </Box>
    </>
  );
};
