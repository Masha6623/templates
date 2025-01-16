import { Button, Box } from "@mui/material";

export const SubmitButton = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Button type="submit" fullWidth variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};
