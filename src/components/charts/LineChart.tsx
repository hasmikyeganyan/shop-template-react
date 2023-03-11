import "chart.js/auto";

import { Line } from "react-chartjs-2";
import "../../assets/styles/linechart.scss";
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Shop charts",

      data: [
        5000, 6000, 8000, 12000, 14000, 16000, 14000, 12000, 8000, 9000, 6000,
        5000, 7000,
      ],

      borderColor: "#003055",

      backgroundColor: "rgba(255, 99, 132, 0.5)",

      tension: 0.5,

      fill: false,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      max: 25000,

      min: 0,

      stepSize: 5000,
    },
  },
};

const LineChart: React.FunctionComponent = () => {
  return (
    <div className="chartWrapper ">
      <div className="linChart ">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChart;
