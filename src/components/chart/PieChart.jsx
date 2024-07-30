import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={chartData} height={100} />
    </div>
  );
};

PieChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default PieChart;
