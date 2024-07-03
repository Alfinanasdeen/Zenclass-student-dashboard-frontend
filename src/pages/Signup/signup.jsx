import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, Zoom } from "react-toastify";

import LOGO from "../../assets/ZenLogo.png";
import BANNER from "../../assets/SiteBanner.png";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import TextField from "../../components/formFields/Textarea";

import "./signup.css";

const Signup = () => {
  const { handleSignUp, isLoading } = useContext(DataContext);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be less than 15 Characters")
      .min(6, "Must be at least 6 Characters")
      .required("Required"),
    lName: Yup.string()
      .max(15, "Must be less than 15 Characters")
      .min(6, "Must be at least 6 Characters")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Required"),
    contactNo: Yup.string()
      .max(15, "Must be less than 15 Characters")
      .min(10, "Must be at least 10 Characters")
      .required("Required"),
    experience: Yup.string()
      .max(10, "Must be less than 10 Characters")
      .min(1, "Must be at least 1 Characters")
      .required("Required"),
    qualification: Yup.string()
      .max(35, "Must be less than 35 Characters")
      .min(2, "Must be at least 2 Characters")
      .required("Required"),
    password: Yup.string()
      .max(15, "Must be less than 15 Characters")
      .min(6, "Must be at least 6 Characters")
      .required("Required"),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password Must Match")
      .required("Required"),
  });

  return (
    <div className="signupPage">
      <div className="row m-0">
        <div className="col-md-8">
          <div className="row img__container">
            <img src={LOGO} alt="Logo" className="logo" />
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  lName: "",
                  contactNo: "",
                  experience: "",
                  qualification: "",
                  password: "",
                  cPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  handleSignUp(values);
                  resetForm();
                }}
              >
                {() => (
                  <Form>
                    <TextField
                      label="First Name"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter Your First Name"
                    />
                    <TextField
                      label="Last Name"
                      name="lName"
                      id="lName"
                      type="text"
                      placeholder="Enter Your Last Name"
                    />
                    <TextField
                      label="Email"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <TextField
                      label="Contact No"
                      name="contactNo"
                      id="contactNo"
                      type="text"
                      placeholder="Enter Your Contact"
                    />
                    <TextField
                      label="Experience"
                      name="experience"
                      id="experience"
                      type="text"
                      placeholder="Enter Your Experience in Years"
                    />
                    <TextField
                      label="Qualification"
                      name="qualification"
                      id="qualification"
                      type="text"
                      placeholder="Enter Your Qualification"
                    />
                    <TextField
                      label="Password"
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Enter Password"
                    />
                    <TextField
                      label="Confirm Password"
                      name="cPassword"
                      id="cPassword"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <button
                      type="submit"
                      className="col-md-12 Register__btn btn-lg btn-block mt-4 mb-4"
                    >
                      {isLoading ? (
                        <span className="spinner-border text-warning"></span>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <Link to="/" className="col-md-6 btn btn-outline-success login-btn">
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

export default Signup;
