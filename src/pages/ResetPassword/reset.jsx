import { useEffect, useContext } from "react";
import "./reset.css";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import { ToastContainer, Zoom } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import LOGO from "../../assets/ZenLogo.png";
import BANNER from "../../assets/SiteBanner.png";
import TextField from "../../components/formFields/Textarea";

const Reset = () => {
  const { handleReset, setResetToken, isLoading } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    setResetToken(id);
  }, [id, setResetToken]);

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Required")
      .min(6, "Must be at least 6 characters")
      .max(15, "Must be less than 15 characters"),
    cPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (values, { resetForm }) => {
    handleReset(values);
    resetForm();
  };

  return (
    <div className="loginPage">
      <div className="row m-0">
        <div className="col-md-8">
          <div className="row img__container">
            <img src={LOGO} alt="Company Logo" className="logo" />
          </div>
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <div className="col-10 col-md-8 col-lg-6">
                <Formik
                  initialValues={{ password: "", cPassword: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <Form>
                      <TextField
                        label="New Password"
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Enter New Password"
                      />
                      <TextField
                        label="Confirm Password"
                        name="cPassword"
                        id="cPassword"
                        type="password"
                        placeholder="Confirm New Password"
                      />
                      <button
                        type="submit"
                        className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center"
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        {isLoading ? (
                          <span className="spinner-border text-warning"></span>
                        ) : (
                          "Update Password"
                        )}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              <Link to="/" className="btn forgot btn-outline-success ">
                Go to Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-right banner__right pr-0">
          <img src={BANNER} className="banner" alt="Banner" />
        </div>
      </div>
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
    </div>
  );
};

export default Reset;
