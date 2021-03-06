import React from "react";

import { Bar } from "react-chartjs-2";

const LineChart = () => {
  const chartData = {
    labels: ["Impressions", "Clicks", "Downloads", "Reviews"],
    datasets: [
      {
        label: "Statistics",
        data: [223, 312, 176, 48],
        backgroundColor: [
          "rgb(255, 99, 132, 0.7)",
          "rgb(54, 162, 235, 0.7)",
          "rgb(255, 206, 86, 0.7)",
          "rgb(99, 142, 200, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="admin_bar_chart">
      <Bar data={chartData} width={100} height={50} options={{}} />
    </div>
  );
};

export default LineChart;
