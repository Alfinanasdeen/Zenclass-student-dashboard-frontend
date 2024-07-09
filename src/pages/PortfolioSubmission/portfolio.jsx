import { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "./portfolio.css";
import DataContext from "../../context/DataContext";
import RequestField from "../../components/textField/RequestField";
import { ToastContainer, Zoom } from "react-toastify";

const Portfolio = () => {
  const {
    portfolio,
    fetchPortfolio,
    handlePortfolio,
    isLoading,
    trigger,
    setTrigger,
  } = useContext(DataContext);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio, trigger, setTrigger]);

  const validationSchema = Yup.object({
    portfolioURL: Yup.string().url().required("Required"),
    githubURL: Yup.string().url().required("Required"),
    resumeURL: Yup.string().url().required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    handlePortfolio(values);
    resetForm({ values: "" });
  };

  return (
    <section className="portfolio">
      <div className="row mx-0">
        <div className="col-sm-12 col-md-6 portfolio__area">
          <Formik
            initialValues={{
              githubURL: "",
              portfolioURL: "",
              resumeURL: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {/* Remove unused 'formik' variable */}
            <Form>
              <div className="widthfit mx-6 px-4">
                <RequestField
                  label="Github URL"
                  name="githubURL"
                  id="githubURL"
                  placeholder="Enter Github URL"
                  type="url"
                />
                <RequestField
                  label="Portfolio URL"
                  name="portfolioURL"
                  id="portfolioURL"
                  placeholder="Enter Portfolio URL"
                  type="url"
                />
                <RequestField
                  label="Resume URL"
                  name="resumeURL"
                  id="resumeURL"
                  placeholder="Enter Resume URL"
                  type="url"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn button" type="submit">
                  {isLoading ? (
                    <span className="spinner-border spinner-border-sm text-warning"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </Form>
          </Formik>
          <p className="note">
            <span>Note</span>: You won`t be able to submit when the Portfolio is
            under <b>Review</b> or <b>Reviewed</b>.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 review__area text-center">
          <div className="border-bottom text-center">
            <h3 className="review__header">Portfolio Review</h3>
          </div>
          <div className="row secondaryGreyTextColor">
            <PortfolioDetail
              title="Status"
              value={portfolio ? portfolio.status : "Not Submitted"}
            />
            <PortfolioDetail
              title="Comment"
              value={portfolio ? portfolio.comment : "Not Submitted"}
            />
            <PortfolioDetail
              title="Date"
              value={
                portfolio ? portfolio.submittedOn.slice(0, 10) : "Not Submitted"
              }
            />
            <PortfolioDetail
              title="Reviewed By"
              value={portfolio ? portfolio.reveiwedBy : "Not Submitted"}
            />
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
    </section>
  );
};

const PortfolioDetail = ({ title, value }) => (
  <div className="col-12 col-sm-6">
    <div className="port_item my-4 d-flex flex-column">
      <span className="port_grey">{title}:</span>
      <span>{value}</span>
    </div>
  </div>
);

PortfolioDetail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Portfolio;
