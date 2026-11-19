// Task 1 — Personal introduction card
function Onetask() {
  const name = "Kais Vhora";
  const course = "React.js Developer";
  const topic = "Component && JSX";
  const completedModule = 3;

  const hascompleteModules = completedModule >= 1;

  return (
    <>
      <div className="intro-card">
        <div className="heading">
          <h3>My introduction</h3>
          <span className="badge">React Student</span>
        </div>
        <div className="card">
          <div className="personal-detail">
            <div className="profile">K</div>
            <p className="title">{name}</p>
            <p className="small-text">Frontend Developer Student</p>
          </div>

          <div className="group-detail">
            <p className="text">
              Course: <span>{course}</span>
            </p>
            <p className="text">
              Topic: <span>{topic}</span>
            </p>
            <p className="text">
              Completed: <span className="number">{completedModule}</span>
            </p>
          </div>

          {hascompleteModules ? (
            <p className="success"> Great job! You have completed modules.</p>
          ) : (
            <p className="warning">
              Start learning and complete your first module!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

//===================================================================
// Task 2 — Shopping bill calculator

function Twotask() {
  const product = "Keyboard";
  const price = 750;
  const quantity = 2;
  const discount = 100;

  const final = price * quantity - discount;

  return (
    <>
      <div className="twotask allcontainer">
        <h2>Shopping Bill</h2>
        <p>Product: {product}</p>
        <p>Price: ₹{price}</p>
        <p>quantity: {quantity}</p>
        <p>discount: {discount}</p>
        <h3>
          Amount show: {price} * {quantity} - {discount}{" "}
        </h3>
        <h1>Final: {final}</h1>
      </div>
    </>
  );
}

//===================================================================
// Task 3 — Student result card

function Threetask() {
  const students = [
    { id: 1, name: "Kais", subject: "Maths", marks: 80 },
    { id: 2, name: "Lalit", subject: "english", marks: 30 },
    { id: 3, name: "Ashish", subject: "Science", marks: 45 },
    { id: 4, name: "Ammar", subject: "Maths", marks: 35 },
  ];

  return (
    <>
      <div className="students-container allcontainer">
        {students.map((student) => (
          <div className="student-group" key={student.id}>
            <h2>Name: {student.name}</h2>
            <p>Subject: {student.subject}</p>
            <p>Marks: {student.marks}</p>

            {/* Result status */}
            {student.marks >= 40 ? (
              <h3 className="passed">Passed</h3>
            ) : (
              <h3 className="failed">Failed</h3>
            )}

            {/* distinction message */}
            {student.marks >= 80 && (
              <p className="distinction">
                Congratulations! you achieved distinction!
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

//===================================================================
// Task 4 — Course list

function Fourtask() {
  const courseList = [
    { id: 1, title: "JAVA", duration: 20, level: 3 },
    { id: 2, title: "HTML", duration: 10, level: 1 },
    { id: 3, title: "JavaScript", duration: 25, level: 5 },
    { id: 4, title: "Python", duration: 15, level: 4 },
    { id: 5, title: "Lervel", duration: 15, level: 6 },
  ];

  return (
    <>
      <div className="allcontainer">
        {courseList.length > 0 ? (
          courseList.map((course) => (
            <ul className="couorse-group" key={course.id}>
              <li>
                <b>Title:</b> {course.title}, <b>Duration:</b> {course.duration}
                , <b>Level:</b> {course.level}
              </li>
            </ul>
          ))
        ) : (
          <p className="empty-message">
            No courses available. Please check back later!
          </p>
        )}
      </div>
    </>
  );
}

//===================================================================
// Task 5 — Product availability
function Fivetask() {
  const fiveProduct = [
    { id: 1, name: "Mobile", price: 15000, availability: false },
    { id: 2, name: "Wire", price: 3500, availability: true },
    { id: 3, name: "Mouse", price: 1500, availability: true },
    { id: 4, name: "Chair", price: 1500, availability: false },
  ];

  return (
    <>
      <div className="allcontainer">
        {fiveProduct.map((product) => (
          <div className="product-five" key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p className={product.availability ? "available" : "unavailable"}>
              {product.availability ? "Available" : "Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

//===================================================================
// Task 6 — Mini dashboard

function Minidashboard() {
  const minidashboard = [
    { id: 1, title: "HTML", completed: true },
    { id: 2, title: "JAVA", completed: true },
    { id: 3, title: "JavaScript", completed: true },
    { id: 4, title: "Python", completed: true },
    { id: 5, title: "PHP", completed: true },
    { id: 6, title: "PHP", completed: true }
  ];

  const completed = minidashboard.filter((dashboard) => dashboard.completed);
  const pending = minidashboard.filter((dashboard) => !dashboard.completed);

  return (
    <>
      <div className="allcontainer">
        <h1>Welcome to Your Learning Dashboard 👋</h1>
        {pending.length === 0 && minidashboard.length > 0 && (
            <h2>🎉 Congratulations! You completed all courses.</h2>
        )}
        <div className="dashboard-conuter">

          <div className="card-counter">
            <h1>{minidashboard.length}</h1>
            <p>Total number of courses</p>
          </div>
          <div className="card-counter">
            <h1>{completed.length}</h1>
            <p>Completed number of courses</p>
          </div>
          <div className="card-counter">
            <h1>{pending.length}</h1>
            <p>Pending number of courses</p>
          </div>

        </div>

        {minidashboard.length > 0 ? (
            <div className="dashboard-container" >
                {minidashboard.map((dashboard) => (
                    <div className="card-dashboard" key={dashboard.id}>
                        <h1>Title: {dashboard.title}</h1>
                        <button className={dashboard.completed? "completed" : "pending"}>
                            {dashboard.completed? "Completed" : "Pending"}
                        </button>
                    </div>
                ))}
            </div>
        ) : (
          <p className="empty">No Available.</p>
        )}
      </div>
    </>
  );
}

// *********************************************************************************
// 10. Group Activities
//===================================================================

function TaskAll() {
  return (
    <>
      <h1 className="task-title">Task 1 — Personal introduction card</h1>
      <Onetask />
      <h1 className="task-title">Task 2 — Shopping bill calculator</h1>
      <Twotask />
      <h1 className="task-title">Task 3 — Student result card</h1>
      <Threetask />
      <h1 className="task-title">Task 4 — Course list</h1>
      <Fourtask />
      <h1 className="task-title">Task 5 — Product availability</h1>
      <Fivetask />
      <h1 className="task-title">Task 6 — Mini dashboard</h1>
      <Minidashboard />
    </>
  );
}

export default TaskAll;
