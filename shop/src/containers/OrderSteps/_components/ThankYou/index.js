import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

export const ThankYou = () => {
  return (
    <Box sx={{textAlign:'center',mt:12}}>
      <img src="/static/images/icon-thank-you.svg" alt='thankYou'/>
      <Typography variant="h6" mt={3}>Thank you</Typography>
      <Typography variant="subtitle2" color="text.secondary" mt={3}>
        thanks for confirming your subscription! we hope you have fun using our
        platform.if you ever need support, please feel free free to email us at
        support@loreGaming.com
      </Typography>
    </Box>
  );
};
