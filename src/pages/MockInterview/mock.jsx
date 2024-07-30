import { useEffect, useContext } from "react";
import api from "../../api/api";
import PropTypes from "prop-types";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import "./mock.css";

const Mock = () => {
  const { mock = [], user, setMockData, authToken } = useContext(DataContext);

  useEffect(() => {
    const fetchMockData = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/mock", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setMockData(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchMockData();
  }, [authToken, setMockData]);

  return (
    <section className="mock">
      <div className="top_sapce"></div>
      {mock.length ? (
        mock.map((data) => (
          <div
            className="task__container"
            key={data._id}
            data-bs-toggle="modal"
            data-bs-target={`#${data._id}`}
          >
            <div className="flexCont">
              <div className="text-center text-md-start">
                <div className="title weight-500">{data.interviewRound}</div>
                <div className="secondaryGreyTextColor">
                  {user.name} {user.lName}
                </div>
              </div>
              <div>
                <div className="secondaryGreyTextColor text-center">
                  Taken By {data.interviewerName}
                </div>
                <div className="ml-3 mr-1">
                  <div className="marktag tasktag mx-1 px-3 rounded">
                    Score: {data.overallScore}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal" id={data._id} key={data._id}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">{data.interviewRound}</h4>
                  </div>
                  <div className="modal-body">
                    <MockDetails
                      title="Name"
                      details={`${user.name} ${user.lName}`}
                    />
                    <MockDetails
                      title="Interview Date"
                      details={data.interviewDate}
                    />
                    <MockDetails
                      title="Interviewer Name"
                      details={data.interviewerName}
                    />
                    <MockDetails
                      title="Interview Round"
                      details={data.interviewRound}
                    />
                    <MockDetails title="Attended" details={data.attended} />
                    <MockDetails title="Comments" details={data.comment} />
                    <MockDetails
                      title="Logical Score"
                      details={data.logicalScore}
                    />
                    <MockDetails
                      title="Overall Score"
                      details={data.overallScore}
                    />
                    <MockDetails
                      title="Recording URL"
                      details={data.recordingURL}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <section>
          <div className="p-4 secondaryTheme" style={{ textAlign: "center" }}>
            Mock interview not assigned
          </div>
        </section>
      )}
    </section>
  );
};
const MockDetails = ({ title, details }) => (
  <div className="mock__Data mb-1">
    <div className="mock__title">
      {title} <span>:</span>
    </div>
    <div className="mock__details">{details}</div>
  </div>
);

MockDetails.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Mock;
