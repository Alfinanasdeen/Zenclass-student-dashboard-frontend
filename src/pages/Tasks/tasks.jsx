import { useEffect, useContext } from "react";
import "./tasks.css";
import api from "../../api/api";
import TaskUrl from "../../components/taskSubmission/taskSubmission";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import PropTypes from "prop-types";

const Tasks = () => {
  const { dbTasks, setDbTasks, authToken, user } = useContext(DataContext);

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

    fetchTasks();
  }, [authToken, setDbTasks]);

  return (
    <section className="task__submission">
      <div className="top_sapce"></div>
      {Array.isArray(dbTasks) && dbTasks.length > 0 ? (
        dbTasks.map((item) => (
          <div
            className="task__container"
            key={item._id}
            data-bs-toggle="modal"
            data-bs-target={`#${item._id}`}
          >
            <div className="flexCont">
              <div className="flexCont__data">
                <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                  <UserInfo
                    name={`${user.name || user.student.name} `}
                    batch={user.batch || user.student.batch}
                  />
                  <div className="mx-1 title weight-100">{item.title}</div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center gap-3">
                <div className="secondaryGreyTextColor">
                  Submitted on {item.submittedOn.slice(0, 10)}
                </div>
                <div className="ml-3 mr-1">
                  <div className="marktag tasktag mx-1 px-3 rounded">
                    Task score: {item.score}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-center mt-3 padding__left">
          Task has not been Submitted
        </h3>
      )}

      {Array.isArray(dbTasks) &&
        dbTasks.map((item) => (
          <div className="modal" key={item._id} id={`${item._id}`}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{item.title}</h4>
                </div>
                <div className="modal-body">
                  <TaskUrl item={item} />
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
        ))}
    </section>
  );
};
const UserInfo = ({ name, batch }) => (
  <div className="flexCont__data">
    <div className="title weight-500 pb-2">{name}</div>
    <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
      <div className="mx-1">{batch}</div>
    </div>
  </div>
);
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
};
export default Tasks;
