import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";
import LOGO from "../../assets/ZenLogo.png";

const UserConfirmation = () => {
  const { handleConfirm, setResetToken } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    setResetToken(id);
  }, [id, setResetToken]);

  return (
    <div className="loggedOut">
      <div className="row img__container">
        <img src={LOGO} alt="Company Logo" className="logo" />
      </div>
      <div className="body__container p-5 rounded text-center">
        <h3 className="text-center mb-4">
          Please click the button below to confirm your account.
        </h3>
        <button onClick={handleConfirm} className="btn btn-success mb-4">
          Activate Account
        </button>
        <div className="text-center">
          <Link to="/" className="btn btn-success">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserConfirmation;
