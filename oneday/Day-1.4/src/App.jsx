import './App.css'
import StudentList from './Components/Component Refactoring/StudentList'
import CatalogueList from './Components/Course Catalogue/CatalogueList'
import ProfileList from './Components/Personal Profile Card/ProfileList'
import PanelList from './Components/Reusable Panel/PanelList'
import GroupActivities from './Components/Section F — Group Activities/GroupActivities'

function App() {

  return(
    <>
      <div className="container">
        {/* Question 29 — Personal Profile Card */}
        <ProfileList/>

        {/* Question 30 — Course Catalogue */}
        <CatalogueList/>

        {/* Question 31 — Reusable Panel */}
        <PanelList/>

        {/* Question 32 — Component Refactoring */}
        <StudentList/>

        {/* Section F — Group Activities */}
        <GroupActivities/>

      </div>
    </>
  )
}

export default App
