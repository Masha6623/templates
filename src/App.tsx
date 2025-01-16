import { Container } from "@mui/material";
import { FormPage } from "./pages/FormPage";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  marginTop: 2,
};

export const App = () => {
  return (
    <Container maxWidth="sm" sx={containerStyles}>
      <FormPage />
    </Container>
  );
};
