import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  datasets: [
    {
      data: [50, 50],
      backgroundColor: ["#063057", "#C4C4C4"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const CircleChart = () => {
  return (
    <div>
      {" "}
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: -90,
          circumference: 360,
          cutout: "50%",
          maintainAspectRatio: true,
          responsive: true,
        }}
      />{" "}
      <div
        style={{
          transform: "translate(-50%, - 50%)",
          textAlign: "center",
        }}
      >
        <div>Total Sales Made Today</div>{" "}
      </div>{" "}
    </div>
  );
};

export default CircleChart;
