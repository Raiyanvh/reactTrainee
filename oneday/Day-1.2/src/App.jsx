import './App.css'
import GroupActivities from './Tasks/GroupActivities'
import TaskAll from "./Tasks/task1"
import AllIncludeTest from './Tasks/test'


function App() {
  return(
    <>
      <div className="container">
        <TaskAll />
        <GroupActivities/>
        <AllIncludeTest/>
      </div>
    </>
  )
}

// function App() {
//   const products = [];

//   return (
//     <div>
//       {products.length > 0 && <p>Products available</p>}
//     </div>
//   );
// }

export default App
