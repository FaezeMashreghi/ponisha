import { Card, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

export const SelectableCard = ({
  src,
  title,
  label,
  description,
  selected,
  onSelectedCardClick,
  id,
}) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => onSelectedCardClick(id)}
        sx={{
          p: 1,
          border: selected ? "1px solid purple" : "",
          backgroundColor: selected ? "#fbf7fc" : "white",
        }}
      >
        <img src={src} alt={title} />
        <Typography variant="subtitle1" className="mt-32">
          {title}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {label}
        </Typography>
        {description && (
          <Typography variant="caption">{description}</Typography>
        )}
      </CardActionArea>
    </Card>
  );
};
