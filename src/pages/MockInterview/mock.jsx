import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import "./mock.css"; // Import CSS for styling

const Mock = () => {
  const { mock, loggedUser, fetchMock } = useContext(DataContext);

  useEffect(() => {
    fetchMock();
  }, [fetchMock]); // Include fetchMock in the dependency array

  return (
    <section className="mock mt-5">
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
                  {loggedUser.name} {loggedUser.lName}
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
                      details={`${loggedUser.name} ${loggedUser.lName}`}
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
        <h3 className="text-center mt-3">Mock interview not assigned</h3>
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
