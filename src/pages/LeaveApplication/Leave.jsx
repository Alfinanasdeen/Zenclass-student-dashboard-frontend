import { useContext, useEffect } from "react";
import "./leave.css";
import api from "../../api/api";
import { BiPlus } from "react-icons/bi";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import { ToastContainer, Zoom } from "react-toastify";
import { Formik, Form } from "formik";
import TextInput from "../../components/formFields/TextInput";
import * as Yup from "yup";

const Leave = () => {
  const {
    leaveRequests = [],
    handleLeaveRequestSubmission,
    handleCancelLeaveRequest,
    setLeaveRequests,
    isLoading,
    authToken,
  } = useContext(DataContext);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/leave", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setLeaveRequests(response.data);
        console.log("Fetched fetchLeaveRequests:", response.data);
      } catch (error) {
        console.error("Error fetching fetchLeaveRequests:", error);
      }
    };

    fetchLeaveRequests();
  }, [authToken, setLeaveRequests]);

  const validationSchema = Yup.object({
    reason: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Required"),
    appliedOn: Yup.date().required("Required"),
  });

  return (
    <section className="leave">
      <div className="btn__container">
        <button
          className="btn addBtn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <BiPlus /> Add Leave
        </button>
      </div>
      <br />
      {leaveRequests.length > 0 ? (
        leaveRequests.map((data) => (
          <div
            className="task__container"
            key={data._id}
            data-bs-toggle="modal"
            data-bs-target={`#leaveModal${data._id}`}
          >
            <div className="leave-container">
              <div className="leave-detail">
                <div className="title weight-500">Reason</div>
                <div className="secondaryGreyTextColor">
                  <div className="mx-1">{data.reason}</div>
                </div>
              </div>
            </div>
            <div className="position-right">
              <div className="secondaryGreyTextColor mx-4">
                Applied on {data.appliedOn.slice(0, 10)}
              </div>
              <div className="">
                <div className="marktag">Status : - {data.status}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-center mt-3">No Leave Request raised</h3>
      )}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Leave</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column gap-1">
              <Formik
                initialValues={{ reason: "", appliedOn: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  handleLeaveRequestSubmission(values);
                  resetForm({ values: "" });
                }}
              >
                {() => (
                  <Form className="d-flex justify-content-center w-75 flex-column mt-2">
                    <TextInput
                      label="Date"
                      placeholder="Enter Date"
                      name="appliedOn"
                      id="appliedOn"
                      type="date"
                    />
                    <TextInput
                      label="Reason"
                      placeholder="Enter Reason"
                      name="reason"
                      id="reason"
                      type="textarea"
                    />
                    <div className="modal-footer text-center">
                      <div className="text-center w-100">
                        <button type="submit" className="submit__btn">
                          {isLoading ? (
                            <span className="spinner-border spinner-border-sm text-warning"></span>
                          ) : (
                            "Create"
                          )}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              <button className="marktag_close" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {leaveRequests.length > 0 &&
        leaveRequests.map((data) => (
          <div className="modal" id={`leaveModal${data._id}`} key={data._id}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Are you sure you want to cancel the leave request? This
                    action cannot be undone.
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <button
                    type="reset"
                    className="marktag"
                    data-bs-dismiss="modal"
                    onClick={() => handleCancelLeaveRequest(data._id)}
                  >
                    Cancel Leave Request
                  </button>
                  <button
                    type="submit"
                    className="btn submit__btn"
                    data-bs-dismiss="modal"
                  >
                    Keep Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Zoom}
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Leave;
