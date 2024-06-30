import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";
import useWindowSize from "../customHooks/useViewportSize";
import { roadMapData } from "../data"; // Assuming roadMapData is provided
import axios from "axios";
import PropTypes from "prop-types";

// Create a context for data management
const StudentDataContext = createContext({});

const getTokenFromLocalStorage = () => {
  const data = localStorage.getItem("loggedInStudentData");
  if (data) {
    const { token } = JSON.parse(data);
    return token;
  }
  return null;
};

// Data provider component
export const StudentDataProvider = ({ children }) => {
  // State variables and hooks
  const { width } = useWindowSize();
  const [pageTitle, setPageTitle] = useState("");
  const [user, setuser] = useState(null); // Initialize with null
  const [authToken, setAuthToken] = useState(""); // Initialize with empty string
  const [resetToken, setResetToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [apiConfig, setApiConfig] = useState({}); // Initialize empty initially

  // State variables for student progress and tasks
  const [currentDay, setCurrentDay] = useState(0);
  const [roadMap, setRoadMap] = useState(roadMapData[0]); // Assuming roadMapData is provided
  const [flagState, setFlagState] = useState(true);
  const [frontEndCode, setFrontEndCode] = useState("");
  const [frontEndURL, setFrontEndURL] = useState("");
  const [backEndCode, setBackEndCode] = useState("");
  const [backEndURL, setBackEndURL] = useState("");
  const [dbTasks, setDbTasks] = useState([]);
  const [dataUpdateTrigger, setDataUpdateTrigger] = useState(0);
  const [webCodeData, setWebCodeData] = useState(null);
  const [capstoneProject, setCapstoneProject] = useState(null);
  const [queries, setQueries] = useState([]);
  const [portfolioData, setPortfolioData] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [mockData, setMockData] = useState([]);

  // Effect hook to initialize data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setuser(userData.student);
      setAuthToken(userData.token);

      setApiConfig({
        headers: {
          authorization: `bearer ${userData.token}`,
        },
      });
    }
    // Example API call on component mount
    api
      .get("/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // handle signin
  const handleSignIn = async (formData) => {
    console.log("Logging in with formData:", formData); // Add this line to check formData
    setIsLoading(true);
    try {
      const response = await api.post("/student/login", formData);
      const userData = response.data;
      // Account verified, proceed with login
      localStorage.setItem("userData", JSON.stringify(userData));
      setuser(userData.student);
      setAuthToken(userData.token);
      setApiConfig({
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });

      setIsLoading(false);

      // Always redirect to /class after successful login
      navigate("/class");
    } catch (error) {
      // Handle other errors during sign-in
      if (error.response && error.response.status === 401) {
        toast.error("Invalid username or password."); // Handle 401 Unauthorized error
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Handle other server errors
      } else {
        console.log("Error during sign-in:", error); // Log any unexpected errors
      }
      setIsLoading(false);
    }
  };

  // Function to handle student logout
  const handleLogout = () => {
    setAuthToken(""); // Clear token on logout
    setuser(null);
    setPageTitle("Class");
    navigate("/");
    localStorage.clear();
  };
  // Example function to handle login and store token
  const handleLogin = async (credentials) => {
    try {
      const response = await api.post("/login", credentials);
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        console.log("Token stored:", token); // Confirm token is stored
      } else {
        console.error("No token received from login response");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error (e.g., show error message)
    }
  };

  // Frontend handleSignUp function example
  const handleSignUp = async (formData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/student/signup", formData);
      toast.success(response.data.message);
      toast.success("Check your Mail & Activate");
      setIsLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        console.log("Error during sign-up:", error);
      }
    }
  };

  // Function to handle profile update
  const handleProfileUpdate = async (updateData) => {
    setIsLoading(true);

    try {
      const response = await api.put("/student/update", updateData);
      const updatedStudent = response.data.matchedStudent;
      const updatedUserData = { token: authToken, student: updatedStudent };
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      setuser(updatedUserData.student);
      toast.success(response.data.message);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/class");
      }, 2000);
    } catch (error) {
      // Handle errors during profile update
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to handle account confirmation
  const handleConfirmAccount = (e) => {
    setIsLoading(true);

    e.preventDefault();
    try {
      api.patch(`/student/confirm/${resetToken}`);
      toast.success("Account confirmed Successfully");
      setIsLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // Handle errors during account confirmation
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to handle forgot password
  const handleForgotPassword = async (formData) => {
    setIsLoading(true);

    try {
      await api.put("/student/forgot", formData);
      toast.success("Reset link sent to your email");
      setIsLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // Handle errors during forgot password
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to handle password reset
  const handlePasswordReset = async (resetData) => {
    setIsLoading(true);

    try {
      const response = await api.patch(
        `/student/reset/${resetToken}`,
        resetData
      );
      setResetToken("");
      toast.success(response.data.message);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // Handle errors during password reset
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to handle task submission
  const handleTaskSubmission = async (formData) => {
    setIsLoading(true);

    const taskCheck = user.email ? user.email : user.student.email;
    const newTask = {
      day: currentDay,
      frontEndCode,
      frontEndURL,
      backEndCode,
      backEndURL,
      task: roadMap.task,
      title: roadMap.title,
      check: taskCheck + currentDay,
      ...formData,
    };

    try {
      const response = await api.post("/student/task", newTask, apiConfig);
      toast.success(response.data.message);
      setBackEndCode("");
      setBackEndURL("");
      setFrontEndCode("");
      setFrontEndURL("");
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update task list
    } catch (error) {
      // Handle errors during task submission
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Example usage in fetchTask function
  const fetchTask = async () => {
    try {
      const token = getTokenFromLocalStorage();

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("/student/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDbTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized (e.g., redirect to login page)
        // Example: history.push('/login');
      } else {
        // Handle other errors
      }
    }
  };

  // Function to fetch all tasks (optional)
  const fetchAllTasks = async () => {
    try {
      const token = getTokenFromLocalStorage();
      if (!token) {
        throw new Error("No token found");
      }
      const response = await api.get("/student/webcode", {
        ...apiConfig,
        headers: { Authorization: `Bearer ${token}` },
      });
      setWebCodeData(response.data[0]); // Assuming only one webcode is fetched
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching web code:", error);
      setIsLoading(false);
      // Handle error (e.g., redirect to login page)
    }
  };

  // Function to handle web code submission
  const handleWebCodeSubmission = async (formData) => {
    setIsLoading(true);

    try {
      const token = getTokenFromLocalStorage();
      if (!token) {
        throw new Error("No token found");
      }
      const response = await api.post("/student/webcode", formData, {
        ...apiConfig,
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(response.data.message);
      setIsLoading(false);
      // Trigger data update
      fetchWebCode(); // Assuming you want to fetch updated data after submission
    } catch (error) {
      console.error("Error submitting web code:", error);
      setIsLoading(false);
      // Handle error (e.g., show error toast)
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to submit web code. Please try again.");
      }
    }
  };

  // Function to fetch web code
  const fetchWebCode = async () => {
    setIsLoading(true);

    try {
      const token = getTokenFromLocalStorage(); // Assuming this function gets the token from local storage
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("/student/webcode", {
        ...apiConfig,
        headers: { Authorization: `Bearer ${token}` },
      });

      // Check if response data is an array and has elements
      if (Array.isArray(response.data) && response.data.length > 0) {
        setWebCodeData(response.data[0]);
      } else {
        setWebCodeData(null);
      }

      setIsLoading(false);
    } catch (error) {
      // Handle errors during fetching web code
      console.log("Error fetching web code:", error);
      setIsLoading(false);
    }
  };

  // Function to handle capstone project submission
  const handleCapstoneSubmission = async (formData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/student/capstone", formData, apiConfig);
      toast.success(response.data.message);
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update capstone section
    } catch (error) {
      // Handle errors during capstone submission
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to fetch capstone project
  const fetchCapstoneProject = async () => {
    setIsLoading(true);

    try {
      const token = getTokenFromLocalStorage(); // Assuming this function gets the token from local storage
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get("/student/capstone", {
        ...apiConfig,
        headers: { Authorization: `Bearer ${token}` },
      });

      // Check if response data is an array and has elements
      if (Array.isArray(response.data) && response.data.length > 0) {
        setCapstoneProject(response.data[0]);
      } else {
        setCapstoneProject(null);
      }

      setIsLoading(false);
    } catch (error) {
      // Handle errors during fetching capstone project
      console.log("Error fetching capstone project:", error);
      setIsLoading(false);
    }
  };

  // Function to handle query submission
  const handleQuerySubmission = async (formData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/student/query", formData, apiConfig);
      toast.success(response.data.message);
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update queries section
    } catch (error) {
      // Handle errors during query submission
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to cancel query
  const handleCancelQuery = async (queryId) => {
    setIsLoading(true);

    try {
      const response = await api.delete(`/student/query/${queryId}`, apiConfig);
      toast.success(response.data.message);
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update queries section
    } catch (error) {
      // Handle errors during cancelling query
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to fetch queries
  const fetchQueries = async () => {
    setIsLoading(true);

    try {
      const response = await api.get("/student/query", apiConfig);
      setQueries(response.data);
      setIsLoading(false);
    } catch (error) {
      // Handle errors during fetching queries
      console.log(error);
      setIsLoading(false);
    }
  };

  // Function to handle portfolio submission
  const handlePortfolioSubmission = async (formData) => {
    setIsLoading(true);

    try {
      const response = await api.post(
        "/student/portfolio",
        formData,
        apiConfig
      );
      toast.success(response.data.message);
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update portfolio section
    } catch (error) {
      // Handle errors during portfolio submission
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to fetch portfolio data
  const fetchPortfolioData = async () => {
    setIsLoading(true);

    try {
      const response = await api.get("/student/portfolio", apiConfig);
      setPortfolioData(response.data[0]);
      setIsLoading(false);
    } catch (error) {
      // Handle errors during fetching portfolio data
      console.log(error);
      setIsLoading(false);
    }
  };

  // Function to handle leave request submission
  const handleLeaveRequestSubmission = async (formData) => {
    setIsLoading(true);

    try {
      const response = await api.post("/student/leave", formData, apiConfig);
      toast.success(response.data.message);
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update leave requests section
    } catch (error) {
      // Handle errors during leave request submission
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to cancel leave request
  const handleCancelLeaveRequest = async (leaveId) => {
    setIsLoading(true);

    try {
      const response = await api.delete(`/student/leave/${leaveId}`, apiConfig);
      toast.success(response.data.message);
      setIsLoading(false);
      setDataUpdateTrigger((prev) => prev + 1); // Increment to update leave requests section
    } catch (error) {
      // Handle errors during cancelling leave request
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  // Function to fetch leave requests
  const fetchLeaveRequests = async () => {
    setIsLoading(true);

    try {
      const response = await api.get("/student/leave", apiConfig);
      setLeaveRequests(response.data);
      setIsLoading(false);
    } catch (error) {
      // Handle errors during fetching leave requests
      console.log(error);
      setIsLoading(false);
    }
  };

  // Function to fetch mock data
  const fetchMockData = async () => {
    setIsLoading(true);

    try {
      const response = await api.get("/student/mock", apiConfig);
      setMockData(response.data);
      setIsLoading(false);
    } catch (error) {
      // Handle errors during fetching mock data
      console.log(error);
      setIsLoading(false);
    }
  };

  // Function to handle page title change
  const handlePageTitleChange = (newTitle) => {
    setPageTitle(newTitle);
    setFlagState(false); // Example state change
    localStorage.setItem("pageTitle", newTitle); // Store in local storage
  };

  // Return provider with context value provided to children
  return (
    <StudentDataContext.Provider
      value={{
        pageTitle,
        setPageTitle: handlePageTitleChange,
        user,
        setuser,
        authToken,
        setAuthToken,
        handleLogin,
        resetToken,
        setResetToken,
        handleSignIn,
        handleLogout,
        handleSignUp,
        handleProfileUpdate,
        handleConfirmAccount,
        handleForgotPassword,
        handlePasswordReset,
        isLoading,
        setIsLoading,
        width,
        currentDay,
        setCurrentDay,
        roadMap,
        setRoadMap,
        flagState,
        setFlagState,
        frontEndCode,
        setFrontEndCode,
        frontEndURL,
        setFrontEndURL,
        backEndCode,
        setBackEndCode,
        backEndURL,
        setBackEndURL,
        handleTaskSubmission,
        apiConfig,
        fetchTask,
        fetchAllTasks,
        dbTasks,
        setDbTasks,
        dataUpdateTrigger,
        setDataUpdateTrigger,
        webCodeData,
        fetchWebCode,
        handleWebCodeSubmission,
        capstoneProject,
        handleCapstoneSubmission,
        fetchCapstoneProject,
        queries,
        fetchQueries,
        handleQuerySubmission,
        handleCancelQuery,
        portfolioData,
        fetchPortfolioData,
        handlePortfolioSubmission,
        leaveRequests,
        fetchLeaveRequests,
        handleLeaveRequestSubmission,
        handleCancelLeaveRequest,
        mockData,
        fetchMockData,
      }}
    >
      {children}
    </StudentDataContext.Provider>
  );
};
// Add prop types validation for the children prop
StudentDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudentDataContext;
