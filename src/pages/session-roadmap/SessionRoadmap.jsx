import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaGooglePlay } from "react-icons/fa";
import "./SessionRoadmap.css";
import { roadMapData, roadMap, roadMapRes } from "../../data"; // Assuming roadMapData contains all session data

import DataContext from "../../student-dashboard-context/StudentDashboardContext";

const SessionRoadmap = () => {
  const {
    isLoading,
    head,
    width,
    setCurrentDay,
    setRoadMap,
    setRoadMapRes,
    setFrontEndCode,
    setFrontEndURL,
    setBackEndCode,
    setBackEndURL,
    setPageTitle,
    handleTaskSubmission,
  } = useContext(DataContext);

  const [selectedSession, setSelectedSession] = useState(null);
  const [flag, setFlag] = useState(false);

  // Assuming roadMapData[head] represents the current day's roadmap
  useEffect(() => {
    setRoadMap(roadMap[head]);
    setRoadMapRes(roadMapRes[head]); // Setting roadMapRes based on the current day
    setFrontEndCode("");
    setFrontEndURL("");
    setBackEndCode("");
    setBackEndURL("");
  }, [
    head,
    setRoadMap,
    setRoadMapRes,
    setFrontEndCode,
    setFrontEndURL,
    setBackEndCode,
    setBackEndURL,
  ]);

  useEffect(() => {
    setPageTitle("Class");
  }, [setPageTitle]);

  const handleSessionClick = (session) => {
    setSelectedSession(session);
    setCurrentDay(session.day);
  };

  return (
    <section className="roadmap">
      <div className="main__container p-2 d-flex justify-content-between gap-3">
        <div className="left">
          <div className="class__head d-flex px-3 justify-content-between align-items-center">
            <h3 className="classhead m-0 text-white">Join the Class</h3>
            <button
              className="play__btn"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              <FaGooglePlay />
            </button>
          </div>
          <div className="session__container">
            <div className="session__area">
              {selectedSession && (
                <>
                  <span className="session__details">
                    <span className="session__title">
                      {selectedSession.title}
                    </span>
                    <br />
                    {selectedSession.time}
                  </span>
                  <hr />
                  <div className="session__content">Contents:</div>
                  <div className="ml-3">
                    <span className="session__content__details text-secondary">
                      {selectedSession.content}
                    </span>
                  </div>
                  <div className="session__content mt-3">Pre-read:</div>
                  <div className="ml-3">
                    <span className="session__content__details text-secondary">
                      {selectedSession.preread}
                    </span>
                  </div>
                  {selectedSession.activity && (
                    <>
                      <div className="activity ml-1 mt-3 mb-2">Activities</div>
                      <div className="session__container">
                        <div className="session__area">
                          <div className="accordion">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="task__link">
                                {selectedSession.activity}
                              </div>
                              <span
                                className={`task__toggle text-white ${
                                  flag ? "rotate-down" : ""
                                }`}
                                onClick={() => setFlag(!flag)}
                              >
                                {flag ? <FaAngleDown /> : <FaAngleUp />}
                              </span>
                            </div>
                            <div className="collapse" id="demo">
                              <div className="card-body">
                                <div className="tagsList">
                                  <div className="tagTitle">Tags:</div>
                                  {selectedSession.tags &&
                                    selectedSession.tags.map((tag, index) => (
                                      <div key={index} className="tagItem">
                                        {tag}
                                      </div>
                                    ))}
                                </div>
                                <div className="p-0">
                                  <form onSubmit={handleTaskSubmission}>
                                    {(selectedSession.task === "fs" ||
                                      selectedSession.task === "fe" ||
                                      selectedSession.task === "fb") && (
                                      <>
                                        <label
                                          htmlFor="FrontEndSourceCode"
                                          className="label__style mb-0"
                                        >
                                          Front-end Source code
                                        </label>
                                        <div>
                                          <input
                                            className="formInputs"
                                            id="FrontEndSourceCode"
                                            name="FrontEndSourceCode"
                                            placeholder="Enter Front-end Source code link"
                                            type="url"
                                            required
                                            value={
                                              selectedSession.frontEndCode || ""
                                            }
                                            onChange={(e) =>
                                              setFrontEndCode(e.target.value)
                                            }
                                            autoComplete="off"
                                          />
                                        </div>
                                      </>
                                    )}
                                    {(selectedSession.task === "fe" ||
                                      selectedSession.task === "fb") && (
                                      <>
                                        <label
                                          htmlFor="FrontEndDeployedURL"
                                          className="label__style mb-0"
                                        >
                                          Front-end Deployed URL
                                        </label>
                                        <div>
                                          <input
                                            className="formInputs"
                                            name="FrontEndDeployedURL"
                                            id="FrontEndDeployedURL"
                                            placeholder="Enter Front-end Deployed URL"
                                            required
                                            value={
                                              selectedSession.frontEndURL || ""
                                            }
                                            onChange={(e) =>
                                              setFrontEndURL(e.target.value)
                                            }
                                            type="url"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </>
                                    )}
                                    {(selectedSession.task === "bs" ||
                                      selectedSession.task === "be" ||
                                      selectedSession.task === "fb") && (
                                      <>
                                        <label
                                          htmlFor="BackEndSourceCode"
                                          className="label__style mb-0"
                                        >
                                          Back-end Source code
                                        </label>
                                        <div>
                                          <input
                                            className="formInputs"
                                            id="BackEndSourceCode"
                                            name="BackEndSourceCode"
                                            placeholder="Enter Back-end Source code"
                                            required
                                            value={
                                              selectedSession.backEndCode || ""
                                            }
                                            onChange={(e) =>
                                              setBackEndCode(e.target.value)
                                            }
                                            type="url"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </>
                                    )}
                                    {(selectedSession.task === "be" ||
                                      selectedSession.task === "fb") && (
                                      <>
                                        <label
                                          htmlFor="BackEndDeployedURL"
                                          className="label__style mb-0"
                                        >
                                          Back-end Deployed URL
                                        </label>
                                        <div>
                                          <input
                                            className="formInputs"
                                            name="BackEndDeployedURL"
                                            id="BackEndDeployedURL"
                                            placeholder="Enter Back-end Deployed URL"
                                            required
                                            value={
                                              selectedSession.backEndURL || ""
                                            }
                                            onChange={(e) =>
                                              setBackEndURL(e.target.value)
                                            }
                                            type="url"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </>
                                    )}
                                    <div className=" task__submitBtn">
                                      <button className="btn">
                                        {isLoading ? (
                                          <span className="spinner-border spinner-border-sm text-warning"></span>
                                        ) : (
                                          "Submit"
                                        )}
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="roadmap__container justify-self-center">
            <div className="roadmap__area">
              <div className="progress__head">Sessions Roadmap</div>
              {/* Integrate the updated sessionsContainer here */}
              <div className="sessionsContainer">
                {width >= 992
                  ? roadMapData.map((item) => (
                      <div
                        key={item.day}
                        className={`roadmap_icon_container ${
                          item.completed ? "completed" : ""
                        }`}
                        onClick={() => handleSessionClick(item)}
                      >
                        <h6>{item.day}</h6>
                        <div className={item.dir}>
                          <div className="step__left"></div>
                          <div className="step__right"></div>
                          <div className="step__bottom"></div>
                        </div>
                      </div>
                    ))
                  : roadMapData.map((item) => (
                      <div
                        key={item.day}
                        className={`roadmap_icon_container ${
                          item.completed ? "completed" : ""
                        }`}
                        onClick={() => handleSessionClick(item)}
                      >
                        <h6>{item.day}</h6>
                        <div className={item.dir}>
                          <div className="step__left"></div>
                          <div className="step__right"></div>
                          <div className="step__bottom"></div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Session Link</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {selectedSession && (
                <a
                  className="recording__link text-dark"
                  href={selectedSession.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedSession.link}
                </a>
              )}
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
    </section>
  );
};

export default SessionRoadmap;
