import { useState } from "react";

function Dashboard() {
  const studentName = "Aarav";

  const [modules, setModules] = useState([
    {
      id: 1,
      title: "React Setup",
      duration: "1 Session",
      completed: false,
    },
    {
      id: 2,
      title: "JSX Fundamentals",
      duration: "1 Session",
      completed: false,
    },
    {
      id: 3,
      title: "Components",
      duration: "1 Session",
      completed: false,
    },
    {
      id: 4,
      title: "Props",
      duration: "1 Session",
      completed: true,
    },
  ]);

  const completedCount = modules.filter((module) => module.completed).length;

  const progress =
    modules.length === 0
      ? 0
      : Math.round((completedCount / modules.length) * 100);

  function toggleActive(id) {
    setModules((previousModules) =>
      previousModules.map((module) =>
        module.id === id ? { ...module, completed: !module.completed } : module,
      ),
    );
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>MERN Stack Internship</h1>
        <p>Learning Dashboard</p>
      </header>

      <section className="welcome-panel">
        <h2>Welcome, {studentName}!</h2>
        <p>
          You have completed {completedCount} out of {modules.length} modules.
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </section>

      <section>
        <h2>Learning Modules</h2>
        {modules.length === 0 ? (
          <p className="noAvailable">No Modules Available</p>
        ) : (
          <div className="module-list">
            {modules.map((module) => (
              <article className="module-card" key={module.id}>
                <h3>{module.title}</h3>
                <p>Duration: {module.duration}</p>
                <p
                  className={
                    module.completed ? "status-completed" : "status-pending"
                  }
                >
                  {module.completed ? "Completed" : "Pending"}
                </p>

                <button
                  className={`check ${module.completed ? "status-completed" : "status-pending"}`}
                  onClick={() => toggleActive(module.id)}
                >
                  {module.completed ? "Undo" : "Completed"}
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="dashboard-footer">Keep learning and building!</footer>
    </main>
  );
}


export default Dashboard;