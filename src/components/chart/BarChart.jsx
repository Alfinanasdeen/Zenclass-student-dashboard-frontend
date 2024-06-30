import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={chartData} height={100} />
    </div>
  );
};

BarChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default BarChart;
