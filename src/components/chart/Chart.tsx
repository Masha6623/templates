import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Typography } from "@mui/material";

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

type ChartData = {
  labels: string[];
  datasets: Dataset[];
};

interface ChartProps {
  data: ChartData;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = (props: ChartProps) => {
  const { data } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Sales: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Typography variant="h5" align="center" justifyContent={"center"}>
        Subscriber growth chart
      </Typography>
      <Bar data={data} options={options} />
    </div>
  );
};
