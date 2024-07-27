import { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import api from "../../api/api";
import BarChart from "../../components/chart/BarChart";
import { Link } from "react-router-dom";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";

const Dashboard = () => {
  const {
    user,
    authToken,
    dbTasks,
    setDbTasks,
    webCodeData,
    setWebCodeData,
    capstoneProject,
    setCapstoneProject,
  } = useContext(DataContext);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Task Score",
        data: [],
        backgroundColor: "#4b0dba",
        borderJoinStyle: "round",
      },
    ],
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/task", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setDbTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const fetchWebCode = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/webcode", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setWebCodeData(response.data);
      } catch (error) {
        console.error("Error fetching webcode:", error);
      }
    };

    const fetchCapstoneProject = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/capstone", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setCapstoneProject(response.data);
      } catch (error) {
        console.error("Error fetching capstone project:", error);
      }
    };

    fetchTasks();
    fetchWebCode();
    fetchCapstoneProject();
  }, [authToken, setDbTasks, setWebCodeData, setCapstoneProject]);

  useEffect(() => {
    if (dbTasks && Array.isArray(dbTasks)) {
      setChartData({
        labels: dbTasks.map((data) => `Day-${data.day}`),
        datasets: [
          {
            label: "Task Score",
            data: dbTasks.map((data) => data.score),
            backgroundColor: "#4b0dba",
            borderJoinStyle: "round",
          },
        ],
      });
    }
  }, [dbTasks]);

  return (
    <section className="dashboard">
      <div className="activities-container">
        <h3 className="text-center p-2">Activities</h3>
        <div className="activities-box">
          <div className="activity-card">
            <div className="activity-title">CodeKata Problem Solved</div>
            <div className="activity-score text-center">{user.codeKata}</div>
          </div>
          <div className="activity-card">
            <div className="activity-title">WebKata Problem Solved</div>
            <div className="activity-score text-center">{user.webKata}</div>
          </div>
        </div>
      </div>
      <br />
      <div className="activities-container">
        <h3 className="text-center p-2">Task Status</h3>
        <BarChart chartData={chartData} />
      </div>
      <br />
      <div className="activities-container">
        <h3 className="text-center p-2">Event Status</h3>
        <div className="activities-box">
          <div className="activity-card">
            <div className="activity-title">Webcode-1 Score</div>
            <div className="activity-score text-center">
              {webCodeData
                ? webCodeData.score !== null && webCodeData.score !== undefined
                  ? webCodeData.score
                  : "Yet to be graded"
                : "Not Submitted"}
            </div>
            <div className="text-center mb-2">
              <Link to="/webcode" className="view-button">
                View
              </Link>
            </div>
          </div>
          <div className="activity-card">
            <div className="activity-title">Capstone-1 Score</div>
            <div className="activity-score text-center">
              {capstoneProject
                ? capstoneProject.score !== null &&
                  capstoneProject.score !== undefined
                  ? capstoneProject.score
                  : "Yet to be graded"
                : "Not Submitted"}
            </div>
            <div className="text-center mb-2">
              <Link to="/capstone" className="view-button">
                View
              </Link>
            </div>
          </div>
          <div className="activity-card">
            <div className="activity-title">Mock Interview Avg</div>
            <div className="activity-score text-center">
              {user.mockInterview}
            </div>
            <div className="text-center mb-2">
              <Link to="/mock" className="view-button">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
