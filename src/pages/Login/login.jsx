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
      <div className="login-container">
        <div className="logo__container">
          <img src={LOGO} alt="Logo" className="logo" />
        </div>
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
              <Link to="/forgot" className="link">
                Forgot Password?
              </Link>
              <button type="submit" className="login-btn">
                {isLoading ? (
                  <span className="spinner-border text-warning"></span>
                ) : (
                  "Login"
                )}
              </button>
              <Link to="/signup" className="link">
                Not Registered? Sign up
              </Link>
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

export default Login;
