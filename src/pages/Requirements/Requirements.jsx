import "./requirements.css";

const Requirements = () => {
  const user = { name: "Alfina", lName: "M" }; // Mock logged user

  return (
    <div className="app">
      <header className="top__header d-flex align-items-center justify-content-between">
        <h1 className="heading">Task Submissions</h1>
        <div className="user__profile d-flex gap-3">
          <h5 className="mt-3 mr-3 user__name">
            {user.name}.{user.lName}
          </h5>
          <div className="user__avatar">
            <img src="path-to-avatar" alt="User Avatar" />
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="task-submissions">
          <p>Content available after completing Placement preparation</p>
        </div>
      </main>
    </div>
  );
};

export default Requirements;
