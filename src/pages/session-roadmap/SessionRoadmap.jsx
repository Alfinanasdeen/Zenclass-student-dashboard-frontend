import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaGooglePlay } from "react-icons/fa";
import "./SessionRoadmap.css";
import { roadMapData, roadMap, roadMapRes } from "../../data";
import DataContext from "../../student-dashboard-context/StudentDashboardContext";

const SessionRoadmap = () => {
  const {
    isLoading,
    head,
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

  useEffect(() => {
    setRoadMap(roadMap[head]);
    setRoadMapRes(roadMapRes[head]);
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

  const renderDirection = (day) => {
    // For days 10, 20, 30: both step__bottom and step__right lines
    if ([10, 20, 30].includes(day)) {
      return (
        <>
          <div className="step__bottom"></div>
          <div className="step__right"></div>
        </>
      );
    }
    // For days 5, 15, 25, 35: only step__bottom line
    else if ([5, 15, 25, 35].includes(day)) {
      return <div className="step__bottom"></div>;
    }
    // For days 1-4, 7-9, 11-14, 17-19, 21-24, 27-29, 31-34, 36-38: step__left line
    else if (
      [
        1, 2, 3, 4, 7, 8, 9, 11, 12, 13, 14, 17, 18, 19, 21, 22, 23, 24, 27, 28,
        29, 31, 32, 33, 34, 37,
      ].includes(day)
    ) {
      return <div className="step__left"></div>;
    }
  };

  const getOrderedDays = () => {
    const pattern = [
      [1, 2, 3, 4, 5],
      [10, 9, 8, 7, 6],
      [11, 12, 13, 14, 15],
      [20, 19, 18, 17, 16],
      [21, 22, 23, 24, 25],
      [30, 29, 28, 27, 26],
      [31, 32, 33, 34, 35],
    ];

    // Append days 38, 37, 36 to the end of the pattern
    pattern.push([38, 37, 36]);

    // Flatten the pattern array
    return pattern.flat();
  };

  const orderedDays = getOrderedDays();

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
                                          <span className="spinner-border"></span>
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
              <div className="sessionsContainer">
                {orderedDays.slice(0, 35).map((day) => (
                  <div
                    key={day}
                    className={`roadmap_icon_container ${
                      roadMapData.find((item) => item.day === day)?.completed
                        ? "completed"
                        : ""
                    }`}
                    onClick={() =>
                      handleSessionClick(
                        roadMapData.find((item) => item.day === day)
                      )
                    }
                  >
                    <h6 className="text-end">{day}</h6>
                    <div className="direction">{renderDirection(day)}</div>
                  </div>
                ))}
              </div>
              <div className="last-line-container">
                {orderedDays.slice(35).map((day, index) => (
                  <div
                    key={day}
                    className={`roadmap_icon_container ${
                      roadMapData.find((item) => item.day === day)?.completed
                        ? "completed"
                        : ""
                    }`}
                    onClick={() =>
                      handleSessionClick(
                        roadMapData.find((item) => item.day === day)
                      )
                    }
                  >
                    <h6 className="text-end">{day}</h6>
                    {index < orderedDays.slice(35).length - 1 && (
                      <div className="direction">
                        <div className="step__left"></div>
                      </div>
                    )}
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
              <p>Modal body..</p>
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
