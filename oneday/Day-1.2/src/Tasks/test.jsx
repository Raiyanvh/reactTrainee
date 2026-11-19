// Question 1
function QuestionOne() {
  const name = "Diya";
  const age = 22;

  return (
    <p>
        {name} is {age} years old.
        {/* Output:Diya is 22 years old */} 
    </p>
  );
}


//===================================================================
// Question 2

function QuestionTwo() {
    const quantity = 4;
    const price = 250;

    return <h2>Total: ₹{quantity * price}</h2>;
    // Total: ₹1000
}


//===================================================================
// Question 3

function QuestionThree() {
    const marks = 35;

    return (
        <p>
            {marks >= 40 ? "Passed" : "Failed"}
            {/* Output: Failed */}
        </p>
    );
}



//===================================================================
// Question 4

function QuestionFour() {
    const topics = ["JSX", "Props", "Components"];

    return (
        <ul>
        {topics.map((topic) => (
            <li key={topic}>{topic}</li>
        ))}
        </ul>
        // JSX
        // Props
        // Components
    );
}


//===================================================================
// Question 5

function QuestionFive(){
    const notifications = 0;

    return (
        <div>
            {notifications > 0 && <p>New notification</p>}
            {/* no display */}
            <p>Welcome</p>
        </div>
    );
}


// 12. Predict the Output
function AllIncludeTest() {
  return (
    <>
      <h1 className="task-title">Question 1</h1>
      <QuestionOne />
      <h1 className="task-title">Question 2</h1>
      <QuestionTwo />
      <h1 className="task-title">Question 3</h1>
      <QuestionThree />
      <h1 className="task-title">Question 4</h1>
      <QuestionFour />
      <h1 className="task-title">Question 5</h1>
      <QuestionFive />
    </>

  );
}

export default AllIncludeTest;
