
// Exercise 1 — Component naming

function StudentCard() {
  return <h2>Student</h2>;
}


// ================================================================
// Exercise 2 — Incorrect props

function CourseCard({ title, duration }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{duration} weeks</p>
    </article>
  );
}


// ================================================================
// Exercise 3 — Incorrect callback

function ActionButton({ onAction }) {
  return <button onClick={onAction}>Click</button>;
}


// ================================================================
// Exercise 4 — Missing key

function KeyList() {
    const students = [
    { id: 1, name: "Aarav" },
    { id: 2, name: "Diya" },
  ];

  return (
    <div>
      {students.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </div>
  );
}


// ================================================================
// Exercise 5 — Incorrect import

// import { Header } from "./Header.jsx";

// it remove back



// ================================================================
// Exercise 6 — Repeated markup

function Repeated() {
    return (
        <main>
        <article><h2>Aarav</h2><p>Frontend</p></article>
        <article><h2>Diya</h2><p>Backend</p></article>
        <article><h2>Kabir</h2><p>Frontend</p></article>
        </main>
    );
}


function Debugging() {
    function handleAction() {
        console.log("Clicked");
    }
    return (
        <>
            <StudentCard/>
            <CourseCard title={"React"} duration={2} />
            <ActionButton onAction={handleAction}/>
            <KeyList/>
            <Repeated/>
        </>
    )
}

export default Debugging;