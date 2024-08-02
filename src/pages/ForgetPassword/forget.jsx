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
      <div className="forgotPage-container">
        <div className="logo__container">
          <img src={LOGO} alt="Logo" className="logo" />
        </div>
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
                label="Enter Registered Emaill"
                name="email"
                type="email"
                placeholder="john@abc.com"
                className="form-input"
              />
              <button type="submit" className="submit-button">
                {isLoading ? (
                  <span className="spinner-border text-warning"></span>
                ) : (
                  "Submit"
                )}
              </button>
              <div>
                <Link to="/" className="link">
                  Go to Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <div className="banner-container">
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
