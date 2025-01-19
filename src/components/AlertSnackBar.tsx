import { Snackbar, Alert } from "@mui/material";

interface AlertSnackbarProps {
  open: boolean;
  handleClose: () => void;
}

export const AlertSnackbar = ({ open, handleClose }: AlertSnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert onClose={handleClose} variant="filled" severity="success">
        Form submitted successfully!
      </Alert>
    </Snackbar>
  );
};
