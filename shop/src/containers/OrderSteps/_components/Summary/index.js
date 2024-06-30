import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { orderPlaned } from "../../../../shared/constants/orderPlaned";
import { addOnOptions } from "../../../../shared/constants/addOn";
import { NavigationButton } from "../../../../components/NavigationButton";

export const Summary = ({ onNextButtonClick, onBackButtonClick }) => {
  const { addOns, planDuration, selectedPlane } = useSelector(
    (state) => state.shopInfo,
  );
  const selectedPlanPrice = orderPlaned.find(({ id }) => id === selectedPlane)
    .price[planDuration];

  const selectedAddOne = addOnOptions.filter(({ id }) => !!addOns[id]);

  const sumAddOns = selectedAddOne.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price?.[planDuration],
    0,
  );

  return (
    <>
      <Typography variant="h3" mt={3} mb={2}>
        Finishing up
      </Typography>
      <Typography variant="caption">
        Double-check everything looks OK before confirm{" "}
      </Typography>
      <Box sx={{ borderRadius: "8px", p: 2, backgroundColor: "#ebeefa" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="subtitle2">
            {`${selectedPlane} (${planDuration})`}
          </Typography>
          <Typography variant="h3">{`$${selectedPlanPrice}/${planDuration}`}</Typography>
        </Box>
        <Divider />
        {selectedAddOne.map(({ title, price }) => (
          <Box key={title} sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="subtitle2">{`+$${price[planDuration]}/${planDuration}`}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {`total ${planDuration}`}
        </Typography>
        <Typography variant="h3" color="primary">
          {`$${sumAddOns + selectedPlanPrice}/${planDuration}`}
        </Typography>
      </Box>
      <NavigationButton
        PrimaryButtonProps={{ onClick: onNextButtonClick }}
        PrimaryButtonLabel="confirm"
        secondaryButtonLabel="go back"
        secondaryButtonProps={{ onClick: onBackButtonClick }}
      />
    </>
  );
};
