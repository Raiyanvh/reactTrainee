// Question 26 — Incorrect JSX attributes and structure

// function App() {
//   return (
//     <div class="container"> ------------>  Change ClassName 
//       <h1>React Training</h1>
//       <img src="/logo.png" alt="Logo">
//     </div>
//   );
// }

// export default App;



// ==================================================================
// Question 27 — Component naming

// function studentCard() {    -----------> // Uppercasing name start --- StudentCard()
//   return <h2>Student Profile</h2>;
// }

// function App() {
//   return <studentCard />;  --------->  // <StudentCard />
// }

// export default App;


// ==================================================================
// Question 28 — Missing list key

// function App() {
//   const students = [
//     { id: 1, name: "Aarav" },
//     { id: 2, name: "Diya" },
//   ];

//   return (
//     <ul>
//       {students.map((student) => (
//         <li>{student.name}</li>  --------> put to write student.id inside list. --- call name key stable and rendering map();
//       ))}
//     </ul>
//   );
// }

export default App;


