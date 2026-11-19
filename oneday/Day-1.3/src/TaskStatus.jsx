function TaskStatus() {
  const completed = true;

  return (
    <>
      <h1>Learn JSX</h1>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </>
  );
}

export default TaskStatus;
