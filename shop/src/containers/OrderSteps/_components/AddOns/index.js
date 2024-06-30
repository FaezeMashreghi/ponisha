import Typography from "@mui/material/Typography";
import { CheckBoxCard } from "../../../../components/CheckBoxCard";
import { addOnOptions } from "../../../../shared/constants/addOn";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setAddOns } from "../../../../features/shopInfo/shopInfoSlice";
import { NavigationButton } from "../../../../components/NavigationButton";

export const AddOns = ({ onNextButtonClick, onBackButtonClick }) => {
  const dispatch = useDispatch();
  const { addOns, planDuration } = useSelector((state) => state.shopInfo);
  const handleCardChecked = (id, checked) => {
    dispatch(setAddOns({ [id]: !checked }));
  };
  const isValidToGoNextSlide = Object.values(addOns).some((value) => value);
  return (
    <>
      <Typography variant="h3" mt={3} mb={2}>
        Pick add-ons
      </Typography>
      <Typography variant="caption">
        Add-ons help enhance your gaming experience.
      </Typography>
      {addOnOptions.map(({ title, description, id, price }) => (
        <Box sx={{ mt: 2 }} key={title}>
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

      <NavigationButton
        PrimaryButtonProps={{
          onClick: onNextButtonClick,
          disabled: !isValidToGoNextSlide,
        }}
        PrimaryButtonLabel="next step"
        secondaryButtonLabel="go back"
        secondaryButtonProps={{ onClick: onBackButtonClick }}
      />
    </>
  );
};
