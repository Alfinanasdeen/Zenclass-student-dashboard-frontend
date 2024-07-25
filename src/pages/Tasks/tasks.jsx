import { useEffect, useContext } from "react";
import "./tasks.css";
import api from "../../api/api";
import TaskUrl from "../../components/taskSubmission/taskSubmission";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";

const Tasks = () => {
  const { dbTasks, setDbTasks, authToken } = useContext(DataContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/task", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        // Convert `score` to a number if it's a string
        const tasks = response.data.map((task) => ({
          ...task,
          score: Number(task.score),
        }));
        setDbTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [authToken, setDbTasks]);
  
  return (
    <section className="task__submission">
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
                <div className="title weight-500">{item.title}</div>
                <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                  <div className="mx-1">({item.batch})</div>
                  <div className="mx-1">{item.title}</div>
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

export default Tasks;
