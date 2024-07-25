import { useContext, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "./queries.css";
import api from "../../api/api";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import RequestField from "../../components/formFields/TextInput";
import { ToastContainer, Zoom } from "react-toastify";

const Queries = () => {
  const {
    queries,
    setQueries,
    handleQuerySubmission,
    handleCancelQuery,
    isLoading,
    authToken,
  } = useContext(DataContext);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        if (!authToken) return;
        const response = await api.get("/student/query", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setQueries(response.data);
        console.log("Fetched queries:", response.data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, [authToken, setQueries]);

  useEffect(() => {
    console.log("Current queries:", queries);
  }, [queries]);

  const validationSchema = Yup.object({
    queryTitle: Yup.string()
      .min(6, "Must be at least 6 Characters")
      .required("Required"),
    queryDesc: Yup.string()
      .min(6, "Must be at least 6 Characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    handleQuerySubmission(values);
    resetForm();
  };

  console.log("Rendering queries component"); // Log to check rendering
  console.log("queries state:", queries); // Log queries state before rendering
  console.log(
    "queries length:",
    queries ? queries.length : "queries is undefined or null"
  ); // Check length

  return (
    <section className="leave">
      <div className="btn__container">
        <button
          className="btn addBtn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <BiPlus />
          Add queries
        </button>
      </div>
      <br />
      {queries && queries.length > 0 ? (
        queries.map((data) => (
          <div
            className="task__container"
            key={data._id}
            data-bs-toggle="modal"
            data-bs-target={`#${data._id}`}
          >
            <div className="d-flex flex-column gap-2 align-items-center">
              <QueriesDetail label="queries Title" value={data.queryTitle} />
              <QueriesDetail
                label="queries Description"
                value={data.queryDesc}
              />
              <div className="d-flex flex-column align-items-center">
                <div className="secondaryGreyTextColor">
                  Applied on {data.appliedOn.slice(0, 10)}
                </div>
                <div className="ml-3 mr-1">
                  <div className="marktag mx-1 px-3 rounded">
                    Status: {data.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-center mt-3">No Queries raised</h3>
      )}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add queries</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body d-flex flex-column gap-1">
              <Formik
                initialValues={{ queryTitle: "", queryDesc: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="d-flex justify-content-center w-75 flex-column mt-2">
                  <RequestField
                    label="queries Title"
                    placeholder="Enter Title/Topic"
                    name="queriesTitle"
                    id="queriesTitle"
                    type="text"
                  />
                  <RequestField
                    label="queries Description"
                    placeholder="Enter Description"
                    name="queriesDesc"
                    id="queriesDesc"
                    type="textarea"
                  />
                  <div className="modal-footer text-center">
                    <button type="submit" className="btn btn-danger w-25">
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm text-warning"></span>
                      ) : (
                        "Create"
                      )}
                    </button>
                  </div>
                </Form>
              </Formik>
              <button className="btn btn-danger w-25" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {queries &&
        queries.length > 0 &&
        queries.map((data) => (
          <div className="modal" key={data._id} id={data._id}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Delete queries - {data.queryTitle}
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="text-center">
                  <div className="title weight-500">Reason</div>
                  <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
                    <div className="mx-1">{data.reason}</div>
                  </div>
                </div>
                <div className="modal-body d-flex flex-column gap-1">
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-danger w-25"
                      onClick={() => handleCancelQuery(data._id)}
                      data-bs-dismiss="modal"
                    >
                      Confirm Delete
                    </button>
                    <button
                      className="btn btn-danger w-25"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
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

const QueriesDetail = ({ label, value }) => (
  <div>
    <div className="queries__group">
      <div className="title weight-500">{label}:</div>
      <div className="secondaryGreyTextColor">{value}</div>
    </div>
  </div>
);

QueriesDetail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Queries;
