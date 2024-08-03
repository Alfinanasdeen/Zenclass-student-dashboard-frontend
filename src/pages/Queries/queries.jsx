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
    console.log("Form values:", values);
    handleQuerySubmission(values); 
    resetForm();
  };

  console.log("Rendering queries component");
  console.log("queries state:", queries);
  console.log(
    "queries length:",
    queries ? queries.length : "queries is undefined or null"
  );

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
          Create Qurey
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
            <div className="query-container">
              <div className="query-detail">
                <QueriesDetail label="queries Title" value={data.queryTitle} />
                <QueriesDetail
                  label="queries Description"
                  value={data.queryDesc}
                />
              </div>
            </div>
            <div className="position-right">
              <div className="secondaryGreyTextColor mx-4">
                Applied on {data.appliedOn.slice(0, 10)}
              </div>
              <div className="marktag">Status: {data.status}</div>
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
            <div className="modal-body">
              <Formik
                initialValues={{ queryTitle: "", queryDesc: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="d-flex justify-content-center w-75 flex-column mt-2">
                  <RequestField
                    label="queries Title"
                    placeholder="Enter Title/Topic"
                    name="queryTitle"
                    id="queryTitle"
                    type="text"
                  />
                  <RequestField
                    label="queries Description"
                    placeholder="Enter Description"
                    name="queryDesc"
                    id="queryDesc"
                    type="textarea"
                  />
                  <div className="modal-footer text-center">
                    <button type="submit" className="btn submit__btn">
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm text-warning"></span>
                      ) : (
                        "Create"
                      )}
                    </button>
                  </div>
                </Form>
              </Formik>
              <button className="marktag_close" data-bs-dismiss="modal">
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
                    Are you sure you want to delete this query? This action
                    cannot be undone.
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <button
                    className="marktag"
                    onClick={() => handleCancelQuery(data._id)}
                    data-bs-dismiss="modal"
                  >
                    Delete Query
                  </button>
                  <button className="btn submit__btn" data-bs-dismiss="modal">
                    Keep Query
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
