import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";
import useWindowSize from "../customHooks/useViewportSize";
import { roadMapData } from "../data";
import PropTypes from "prop-types";

// Create a context for data management
const StudentDataContext = createContext({});

// Function to retrieve token from localStorage
const getTokenFromLocalStorage = () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const { token } = JSON.parse(userData);
    return token;
  }
  return null;
};

// Function to retrieve user from localStorage
const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const { student } = JSON.parse(userData);
    return student;
  }
  return null;
};

// Data provider component
export const StudentDataProvider = ({ children }) => {
  // State variables and hooks
  const { width } = useWindowSize();
  const [pageTitle, setPageTitle] = useState("");
  const [user, setuser] = useState(getUserFromLocalStorage());
  const [authToken, setAuthToken] = useState(getTokenFromLocalStorage());
  const [resetToken, setResetToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();

  // State variables for student progress and tasks
  const [currentDay, setCurrentDay] = useState(1);
  const [roadMap, setRoadMap] = useState({});

  useEffect(() => {
    console.log("roadMapData before set:", roadMapData);
    if (roadMapData && Array.isArray(roadMapData) && roadMapData.length > 0) {
      const dayData = roadMapData.find((day) => day.day === currentDay);
      if (dayData) {
        console.log("Setting roadMap with:", dayData);
        setRoadMap(dayData);
      } else {
        console.error("No data found for currentDay:", currentDay);
      }
    } else {
      console.error("Invalid roadMapData:", roadMapData);
    }
  }, [currentDay]);

  useEffect(() => {
    console.log("RoadMap updated:", roadMap);
    console.log("Checking task property:", roadMap?.task);
  }, [roadMap]);

  const [roadMapRes, setRoadMapRes] = useState(null);
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
  const [portfolio, setPortfolio] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [mockData, setMockData] = useState([]);
  const [isTaskSubmitted, setIsTaskSubmitted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("userData");
    if (token) {
      setAuthToken(token);
    }
    if (storedUser) {
      setuser(JSON.parse(storedUser));
    }
    setLoadingData(false);
  }, []);

  // Update API config when token changes
  const [apiConfig, setApiConfig] = useState({
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  useEffect(() => {
    if (authToken) {
      setApiConfig({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    }
  }, [authToken]);

  // Function to handle sign-in
  const handleSignIn = async (formData) => {
    setIsLoading(true);
    try {
      console.log(
        `Fetching data from API: ${import.meta.env.VITE_API_BASE_URL}`
      );
      const response = await api.post("/student/login", formData);
      const userData = response.data;
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("userData", JSON.stringify(userData.student));

        setAuthToken(userData.token);
        setuser(userData.student);
        setIsLoading(false);
        navigate("/class");
      } else {
        throw new Error("Token not received in the response.");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred during sign-in.");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setuser(null);
    setAuthToken(null);
    toast.info("You have been logged out.");
    navigate("/login");
  };

  // Set up an API interceptor for response error handling
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.data.message === "TokenExpired") {
        // Handle token expiration
        handleLogout();
        toast.error("Token Expired");
      }
      return Promise.reject(error);
    }
  );

  // Function to handle login and store token (if needed separately)
  const handleLogin = async (credentials) => {
    try {
      console.log(
        `Fetching data from API: ${import.meta.env.VITE_API_BASE_URL}`
      );
      const response = await api.post("/login", credentials);
      console.log("api", api);
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

  // Frontend handleSignUp function
  const handleSignUp = async (formData) => {
    setIsLoading(true);
    try {
      console.log(
        `Fetching data from API: ${import.meta.env.VITE_API_BASE_URL}`
      );
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

  // Function to handle Forgot password
  const handleForgotPassword = async (formData) => {
    console.log("Form Data:", formData);
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

  // Function to handle Password reset
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

  // Function to handle Task submission
  const handleTaskSubmission = async (e) => {
    e.preventDefault();

    console.log("Handling task submission with roadMap:", roadMap.task);

    if (!roadMap || !roadMap.task) {
      console.error("RoadMap is undefined or does not have a task property.");
      toast.error("RoadMap data is missing.");
      return;
    }

    setIsLoading(true);
    const token = localStorage.getItem("token");
    console.log("Retrieved token from local storage:", token);

    if (!token) {
      console.error("Token is missing from local storage.");
      toast.error("Session expired, please log in again.");
      setIsLoading(false);
      return;
    }

    const apiConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let check = user?.email ? user.email : user?.student?.email;
    if (!check) {
      console.error("User email is missing.");
      toast.error("User data is missing.");
      setIsLoading(false);
      return;
    }

    check = check + currentDay;

    const newTask = {
      currentDay,
      frontEndCode,
      frontEndURL,
      backEndCode,
      backEndURL,
      task: roadMap.task,
      title: roadMap.title,
      check,
    };

    console.log("title:", roadMap.title);
    console.log("New Task Data:", newTask);

    try {
      const response = await api.post("/student/task", newTask, apiConfig);
      toast.success(response.data.message);
      setBackEndCode("");
      setBackEndURL("");
      setFrontEndCode("");
      setFrontEndURL("");

      // Fetch tasks again after submission
      setIsTaskSubmitted(true);
      fetchTask();
    } catch (error) {
      console.error("Submission Error:", error);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while submitting the task.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (loadingData) {
    return <p>Loading...</p>;
  }

  //Function to handle Fetching tasks
  const fetchTask = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.get("/student/task", {
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
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await api.get("/student/webcode", {
        ...apiConfig,
        headers: { Authorization: `Bearer ${token}` },
      });
      setWebCodeData(response.data[0]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching web code:", error);
      setIsLoading(false);
    }
  };

  // Function to handle web code submission
  const handleWebCodeSubmission = async (formData) => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await api.post("/student/webcode", formData, {
        ...apiConfig,
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(response.data.message);
      setIsLoading(false);
      fetchWebCode();
    } catch (error) {
      console.error("Error submitting web code:", error);
      setIsLoading(false);
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
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.get("/student/webcode", {
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
      setDataUpdateTrigger((prev) => prev + 1);
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
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await api.get("/student/capstone", {
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

  //Function to Fetch Query
  const fetchQueries = async () => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await api.get("/student/query", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setQueries(response.data);
      } else {
        throw new Error(`Failed to fetch queries: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching queries:", error.response || error.message);
      toast.error(error.message || "Error fetching queries");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle Query submission
  const handleQuerySubmission = async (formData) => {
    setIsLoading(true);
    console.log("Submitting query with data:", formData);

    try {
      const apiConfig = {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      };

      const response = await api.post("/student/query", formData, apiConfig);
      console.log("Query submitted successfully:", response.data);
      toast.success(response.data.message);

      // Fetch updated queries
      fetchQueries();
    } catch (error) {
      console.error("Error submitting query:", error.response || error.message);
      toast.error(
        error.response?.data?.message || "Network error or request failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle cancel query
  const handleCancelQuery = async (queryId) => {
    setIsLoading(true);

    try {
      const apiConfig = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const response = await api.delete(`/student/query/${queryId}`, apiConfig);
      toast.success(response.data.message);

      // Fetch updated queries
      fetchQueries();
    } catch (error) {
      console.error("Error cancelling query:", error.response || error.message);
      toast.error(
        error.response?.data?.message || "Network error or request failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handling portfolio submission
  const handlePortfolio = async (data) => {
    setIsLoading(true);

    try {
      const response = await api.post("student/portfolio", data, apiConfig);
      toast.success(response.data.message);
      setDataUpdateTrigger((prev) => prev + 1);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // fetching portfolio data
  const fetchPortfolio = async () => {
    try {
      const fetchedPortfolio = await api.get("student/portfolio", apiConfig);
      if (fetchedPortfolio) {
        setPortfolio(fetchedPortfolio.data[0]);
      }
    } catch (error) {
      console.log(error);
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
      fetchLeaveRequests();
    } catch (error) {
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
      fetchLeaveRequests();
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
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
      console.log(error);
      setIsLoading(false);
    }
  };

  // Function to handle page title change
  const handlePageTitleChange = (newTitle) => {
    setPageTitle(newTitle);
    setFlagState(false);
    localStorage.setItem("pageTitle", newTitle);
  };

  return (
    <StudentDataContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        handlePageTitleChange,
        roadMapRes,
        setRoadMapRes,
        user,
        setuser,
        authToken,
        setQueries,
        setAuthToken,
        setLeaveRequests,
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
        setWebCodeData,
        setCapstoneProject,
        queries,
        fetchQueries,
        handleQuerySubmission,
        handleCancelQuery,
        portfolio,
        fetchPortfolio,
        handlePortfolio,
        leaveRequests,
        fetchLeaveRequests,
        handleLeaveRequestSubmission,
        handleCancelLeaveRequest,
        mockData,
        fetchMockData,
        setMockData,
        isTaskSubmitted,
        setIsTaskSubmitted,
        setPortfolio,
      }}
    >
      {children}
    </StudentDataContext.Provider>
  );
};

StudentDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudentDataContext;
