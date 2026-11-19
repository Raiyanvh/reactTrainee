import { useEffect, useState } from "react";



// Example: A normal JavaScript variable
// function Counter(){
//     let count = 0;

//     function increase() {
//         count = count + 1;
//         console.log(count);
//     }

//     return(
//         <div>
//             <h1 className="heading-text">Example: A normal JavaScript variable</h1>
//             <h2>{count}</h2>
//             <button onClick={increase}>Increase</button>
//         </div>
//     )
// }


// =======================================================================
// Example 1: Button Click

// function ButtonClick() {
//     function handleclick() {
//         alert("Welcome to React!, Kais will dream to plan 4 wife and buy to fee one anywoman. becuase he enjoy face new thire her.");
//     }
    
//     return(
//         <div>
//             <h1 className="heading-text">Example 1: Button Click</h1>
//             <button onClick={handleclick}>Click me</button>
//         </div>
//     );
// }



// =======================================================================
// Example 2: Passing Arguments to an Event Handler

// function Greeting() {
//     function greet(name){
//         alert(`Hello, ${name}!`);
//     }

//     return(
//         <div>
//             <h1 className="heading-text">Example 2: Passing Arguments to an Event Handler</h1>
//             <h3 className="demo"></h3>
//             <button onClick={() => greet("Rahil")}>Greet</button>
//         </div>
//     );
// }

// =======================================================================
// Example: Counter Application

// function Counter(){
//     const [count, setCount] = useState(0);

//     return(
//         <div className="heading-text">
//             <h3>Example: Counter Application</h3>
//             <h1>Counter</h1>
//             <h2>{count}</h2>

//             <button onClick={()=> setCount(count + 1)}>
//                 Increase
//             </button>

//             <button onClick={() => setCount(count - 1)}>
//                 Decrease
//             </button>

//             <button onClick={()=> setCount(0)}>Reset</button>
//         </div>
//     )
// }


// =======================================================================
// 6. Handling Input Fields with State

// function NameForm(){
//     const [name, setName] = useState("");

//     function updateValue(event){
//         setName(event.target.value)
//     }
//     return(
//         <div>
//             <h2>Enter Your Name</h2>

//             <input 
//                 type="text"
//                 value= {name}
//                 onChange={updateValue}
//                 placeholder="Type your name"
//             />

//             <p>Welcome, {name || "Student"}!</p>
//         </div>

//     );
// }


// =======================================================================
// 9. Practical Example: Counter with useEffect

// function Counter() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `Count: ${count}`;
//     }, [count]);

//     function increase() {
//         setCount((c)=> c + 1);
//     }
//     return(
//         <>
//             <h2>Count: {count}</h2>
//             <button onClick={increase}>
//                 Increase
//             </button>
//         </>
//     )

// }

// =======================================================================
// 10. Cleanup in useEffect

function Timer(){
    useEffect(() => {
        const interValId = setInterval(() => {
            console.log("One second passed");
        }, 1000); 
        
        // i do not understand, this explain 
        return () => {
            clearInterval(interValId);
        };
    }, []);

    return <h2>Timer is running  </h2>;

}







function DayOne() {
  return (
    <div className="container">
        {/* Example: A normal JavaScript variable */}
        {/* <Counter/> */}

        {/* Example 1: Button Click */}
        {/* <ButtonClick/> */}

        {/* Example 2: Passing Arguments to an Event Handler */}
        {/* <Greeting/> */}

        {/* Example: Counter Application */}
        {/* <Counter/>*/}

        {/* 6. Handling Input Fields with State */}
        {/* <NameForm/> */}

        {/* 9. Practical Example: Counter with useEffect */}
        {/* <Counter/> */}

        {/* 10. Cleanup in useEffect */}
        <Timer/>

    </div>
  )
}

export default DayOne;