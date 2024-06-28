import { Card, CardActionArea, Checkbox } from "@mui/material";
import Typography from "@mui/material/Typography";

export const CheckBoxCard = ({
  label,
  description,
  checked,
  id,
  onCardCheck,
  rightLabel,
}) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => onCardCheck(id, checked)}
        sx={{
          p: 1,
          border: checked ? "1px solid purple" : "",
          backgroundColor: checked ? "#fbf7fc" : "white",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Checkbox color="secondary" checked={checked} />
        <div>
          <Typography variant="subtitle1">{label}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {description}
          </Typography>
        </div>
        <Typography variant="subtitle1" ml="auto">
          {rightLabel}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
