import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Chart as ChartJSInstance,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyGradientBarChart: React.FC = () => {
  const chartRef = useRef<ChartJSInstance<"bar"> | null>(null);

  const data: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "",
        data: [65, 59, 60, 61, 56, 55, 40],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return undefined;

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "#804426");
          gradient.addColorStop(1, "#f5caae");
    
          return gradient;
        },

        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 0,
        barThickness: 15,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
        text: "Gradient Bar Chart",
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderRadius: 5,
      },
    },


  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default MyGradientBarChart;
