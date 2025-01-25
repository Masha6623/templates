import { Container } from "@mui/material";
import { Feature } from "./types/roleTypes.ts";
import { useAppSelector } from "./store/hooks.ts";
import { RoleSelector } from "./components/roleSelector/RoleSelector.tsx";
import { hasAccessToFeature } from "./store/roleSlice.ts";
import { HomePage } from "./pages/HomePage.tsx";
import { FormPage } from "./pages/FormPage.tsx";
import { Chart } from "./components/chart/Chart.tsx";
import { Navbar } from "./components/Navbar.tsx";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  marginTop: 2,
  gap: 1,
};

export const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Subscribers",
      data: [5, 14, 20, 57, 100],
      backgroundColor: "rgba(12, 118, 194, 0.2)",
      borderColor: "rgb(37, 133, 243)",
      borderWidth: 1,
    },
  ],
};

export const App = () => {
  const hasAccess = useAppSelector(hasAccessToFeature);

  return (
    <Container maxWidth="sm" sx={containerStyles}>
      <Navbar />
      <RoleSelector />
      {hasAccess(Feature.HOME_PAGE) && <HomePage />}
      {hasAccess(Feature.TEMPLATE_LIST) && <FormPage />}
      {hasAccess(Feature.CHARTS) && <Chart data={data} />}
    </Container>
  );
};
