import { useEffect, useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ToastContainer, Zoom } from "react-toastify";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import StudentDashboardContext from "../../student-dashboard-context/StudentDashboardContext";
import TextField from "../../components/formFields/Textarea";
import "./capstone.css";

const Capstone = () => {
  const {
    user,
    trigger,
    setTrigger,
    capstoneProject,
    handleCapstoneSubmission,
    fetchCapstoneProject,
    isLoading,
  } = useContext(StudentDashboardContext);

  useEffect(() => {
    fetchCapstoneProject();
  }, [trigger, setTrigger]);

  if (!user || !user.name) {
    return <div>Loading user data...</div>;
  }

  const validationSchema = Yup.object({
    feCode: Yup.string().url("Enter Valid URL").required("Required"),
    feUrl: Yup.string().url("Enter Valid URL").required("Required"),
    beCode: Yup.string().url("Enter Valid URL").required("Required"),
    beUrl: Yup.string().url("Enter Valid URL").required("Required"),
  });

  const renderCapstoneDetails = (capstoneProject) =>
    capstoneProject && (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Submission</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="codeName">Front-end Source code</td>
            <td>
              <a
                href={capstoneProject.feCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                {capstoneProject.feCode} <FaExternalLinkAlt />
              </a>
            </td>
          </tr>
          <tr>
            <td className="codeName">Front-end Deployed URL</td>
            <td>
              <a
                href={capstoneProject.feUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {capstoneProject.feUrl} <FaExternalLinkAlt />
              </a>
            </td>
          </tr>
          <tr>
            <td className="codeName">Back-end Source code</td>
            <td>
              <a
                href={capstoneProject.beCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                {capstoneProject.beCode} <FaExternalLinkAlt />
              </a>
            </td>
          </tr>
          <tr>
            <td className="codeName">Back-end Deployed URL</td>
            <td>
              <a
                href={capstoneProject.beUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {capstoneProject.beUrl} <FaExternalLinkAlt />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    );

  const renderForm = () => (
    <Formik
      initialValues={{ feCode: "", feUrl: "", beCode: "", beUrl: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleCapstoneSubmission(values);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Code Submission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <TextField
                    label="Front End Source Code"
                    placeholder="Enter Front-end Source Code URL"
                    name="feCode"
                    type="url"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    label="Front End Deployed URL"
                    placeholder="Enter Front-end Deployed URL"
                    name="feUrl"
                    type="url"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    label="Back End Source Code"
                    placeholder="Enter Back-end Source Code URL"
                    name="beCode"
                    type="url"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    label="Back End Deployed URL"
                    placeholder="Enter Back-end Deployed URL"
                    name="beUrl"
                    type="url"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button className="submit__capstone" type="submit">
              {isLoading ? (
                <span className="spinner-border spinner-border-sm text-warning"></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
  console.log("capstoneProject1:", capstoneProject);
  // Convert score to number
  const capstoneData = {
    ...capstoneProject,
    score: capstoneProject?.score ? Number(capstoneProject.score) : undefined,
  };

  return (
    <section className="task__submission">
      <div className="capstone-top"></div>
      <div
        className="task__container mt-5"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        <div className="d-flex justify-content-between flexCont">
          <UserInfo
            name={`${user.name || user.student.name} `}
            batch={user.batch || user.student.batch}
          />
          <CapstoneInfo capStone={capstoneData} />
        </div>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Capstone- 1</h4>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
            <div className="modal-body mt-2">
              <div className="px-4 d-flex flex-column gap-1">
                <UserInfo
                  name={`${user.name || user.student.name} `}
                  batch={`${user.batch || user.student.batch} - First Capstone`}
                />
                <div className="secondaryGreyTextColor">
                  Task Title:- Zen Class Student Dashboard
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="marktag tasktag rounded">
                    {capstoneProject
                      ? `score : - ${capstoneProject.score}`
                      : "Pending"}
                  </div>
                </div>

                <div className="secondaryGreyTextColor">
                  {capstoneProject
                    ? `submitted on ${
                        capstoneProject.submittedOn
                          ? capstoneProject.submittedOn.slice(0, 10)
                          : "Date not available"
                      }`
                    : "Not Submitted"}
                </div>
              </div>
              <div className="mx-1 secondaryGreyTextColor">
                <div className="col-12">
                  <div className="mx-3 mt-1">
                    <strong>Description :</strong>
                  </div>
                  <div className="mx-2 py-1 px-2">
                    <p>
                      To identify and implement the Capstone project as the
                      title given below by meeting all the necessary
                      requirements.
                    </p>
                    <p>
                      <strong>Any specifications on the design?</strong>
                    </p>
                    <ul>
                      <li>Front-end: Reactjs</li>
                      <li>Back-end: Nodejs</li>
                      <li>Database: MongoDB</li>
                      <li>
                        <strong>Requirements:</strong>
                      </li>
                      <li>The project should achieve the CODE QUALITY</li>
                      <li>Use fonts/icons if it’s required in the design.</li>
                      <li>
                        The use of various charts is required in the design.
                      </li>
                      <li>
                        The use of bootstrap/ material CSS is required in the
                        design
                      </li>
                    </ul>
                    <p>
                      <strong>How do I submit my work?</strong>
                    </p>
                    <ul>
                      <li>
                        Push all your work files to GitHub in two different
                        repositories as given below
                      </li>
                      <li>Front-end repo name project-name-frontend.</li>
                      <li>Back-end repo name project-name-backend.</li>
                      <li>
                        Deploy your front-end application on
                        Netlify(https://www.netlify.com) and back-end
                        application on Render(https://render.com/).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {renderCapstoneDetails(capstoneProject)}
              {!capstoneProject && renderForm()}
              <div className="col-12 marksContainer">
                <div className="row d-flex align-itmes-center justify-content-between mx-1">
                  <div className="d-flex">
                    <div className="mx-1 mt-1">
                      <strong>Frontend Score :</strong>
                    </div>
                    <div className="ml-3 mt-1">
                      {capstoneProject
                        ? capstoneProject.frontendScore
                        : "Pending"}
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="mx-1 mt-1">
                      <strong>Backend Score :</strong>
                    </div>
                    <div className="ml-3 mt-1">
                      {capstoneProject
                        ? capstoneProject.backendScore
                        : "Pending"}
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer
                draggable={false}
                transition={Zoom}
                autoClose={5000}
                newestOnTop
                closeOnClick
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserInfo = ({ name, batch }) => (
  <div className="flexCont__data">
    <div className="title weight-500 pb-2">{name}</div>
    <div className="row d-flex align-items-center justify-content-evenly secondaryGreyTextColor">
      <div className="mx-1">{batch} - Zen Class Student Dashboard</div>
    </div>
  </div>
);
UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
};

const CapstoneInfo = ({ capStone }) => {
  console.log("capstoneProject2:", capStone);

  return (
    <div>
      <div className="mx-1 secondaryGreyTextColor text-center pb-2">
        {capStone && capStone.submittedOn
          ? `submitted on ${capStone.submittedOn.slice(0, 10)}`
          : "Not Submitted"}
      </div>
      <div className="ml-3 mr-1">
        <div className="marktag tasktag mx-1 px-3 rounded">
          {capStone && capStone.score !== undefined
            ? `Capstone score: - ${capStone.score}`
            : "Pending"}
        </div>
      </div>
    </div>
  );
};
CapstoneInfo.propTypes = {
  capStone: PropTypes.shape({
    score: PropTypes.number,
    submittedOn: PropTypes.string,
    feCode: PropTypes.string,
    feUrl: PropTypes.string,
    beCode: PropTypes.string,
    beUrl: PropTypes.string,
  }),
};

export default Capstone;
