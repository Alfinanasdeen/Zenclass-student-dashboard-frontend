import { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, Zoom } from "react-toastify";
import LOGO from "../../assets/ZenLogo.png";
import BANNER from "../../assets/SiteBanner.png";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import TextField from "../../components/formFields/Textarea";

const Login = () => {
  const { handleSignIn, isLoading } = useContext(DataContext);

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="loginPage">
      <div className="row m-0">
        <div className="col-md-8">
          <div className="row img__container">
            <img src={LOGO} alt="Logo" className="logo" />
          </div>
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6 top-area">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSignIn(values)}
              >
                {() => (
                  <Form>
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Example: johndoe@mail.com"
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Your Password"
                    />
                    <button
                      type="submit"
                      className="col-md-12 login__btn btn-lg btn-block login-btn mt-4 mb-4"
                    >
                      {isLoading ? (
                        <span className="spinner-border text-warning"></span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
              <Link
                to="/forgot"
                className="col-md-12 btn custom-btn custom-btn-outline-danger"
              >
                Forgot Password?
              </Link>
              <Link
                to="/signup"
                className="col-md-12 btn custom-btn custom-btn-outline-success"
              >
                Not Registered? Sign up
              </Link>
              <button
                className="col-md-12 btn custom-btn custom-btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#demoModal"
              >
                Demo Login
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 banner__right px-0">
          <img src={BANNER} className="banner" alt="Banner" />
        </div>
      </div>

      <div className="modal" id="demoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Welcome to Zen Student Dashboard</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <strong>For Login:</strong>
                <div>Email: student@gmail.com</div>
                <div>Password: student@123</div>
                <hr />
                <p className="text-secondary">
                  Note: The Student Dashboard project is designed specifically
                  for students, offering features like attending classes,
                  submitting assignments, viewing the dashboard, submitting web
                  code and capstone projects, raising queries, submitting
                  portfolios, and requesting leave.
                </p>
              </div>
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

export default Login;
