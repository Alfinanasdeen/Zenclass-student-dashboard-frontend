import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { ToastContainer, Zoom } from "react-toastify";
import * as Yup from "yup";

import LOGO from "../../assets/ZenLogo.png";
import BANNER from "../../assets/SiteBanner.png";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import TextField from "../../components/formFields/Textarea";

import "./forget.css";

const Forgot = () => {
  const { handleForgotPassword, isLoading } = useContext(DataContext);

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
  });

  return (
    <div className="forgotPage">
      <div className="row m-0">
        <div className="col-md-8">
          <div className="row img__container">
            <img src={LOGO} alt="Logo" className="logo" />
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6 top-area">
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  handleForgotPassword(values);
                  resetForm();
                }}
              >
                {() => (
                  <Form>
                    <TextField
                      label="Registered Email"
                      name="email"
                      type="email"
                      placeholder="Enter Registered Email"
                    />
                    <button
                      type="submit"
                      className="col-md-12 Reset__btn mt-4 mb-4"
                    >
                      {isLoading ? (
                        <span className="spinner-border text-warning"></span>
                      ) : (
                        "Request Reset Link"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <Link
              to="/"
              className="col-md-4 col-sm-6 col-6 btn login-btn btn-outline-success"
            >
              Go to Login
            </Link>
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

export default Forgot;
