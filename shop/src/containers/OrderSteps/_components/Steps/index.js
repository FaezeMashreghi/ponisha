import { steps } from "../../../../shared/constants/steps";
import { Step, StepLabel, Stepper } from "@mui/material";
import Typography from "@mui/material/Typography";

const Steps = ({ activeStep, isVertical }) => {
  return (
    <Stepper
      orientation={isVertical ? "vertical" : "horizontal"}
      activeStep={activeStep}
      sx={{ mt: 3 }}
    >
      {steps.map(({ label, description, }) => (
        <Step key={label} >
          <StepLabel>
            {isVertical && (
              <div>
                <Typography display="block" variant="caption" color="gray">
                  {label}
                </Typography>

                <Typography display="block" variant="caption" color="white">
                  {description}
                </Typography>
              </div>
            )}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default Steps;
