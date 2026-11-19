import '../12. Individual Practice Tasks 1.3/IndividualTask.css';
import CourseCard from './Card/CourseCard';
import Panel from './Card/Panel';
import ProfileCard from './Card/ProfileCard';
import SkillList from './Card/SkillList';


// Task 1 — Reusable Profile Card
function OneInclude(){
    return(
        <>
            <div className="group-profile">
                    <h1 className="title">Task 1 — Reusable Profile Card</h1>
                    <div className="profile-grid">
                        <ProfileCard 
                            name={"Kais"}
                            department={"SQL"}
                            Completedcourses = {4}
                        />

                        <ProfileCard 
                            name = {"Rahil"}
                            role = {"Software"}
                            department = {"C##"}
                            Completedcourses = {8}
                        />

                        <ProfileCard 
                            name = {"Amir"}
                            role = {"Business"}
                            department = {"Sell"}
                            Completedcourses = {100}
                        />
                    </div>
            </div>
        </>
    )
}

// =============================================================================
// Task 2 — Course Card

function TwoInclude() {
    const courses = [
        {id: 1, title: "Frontend Developer", duration: 2, level: "Beginner", Publication: true},
        {id: 2, title: "UX & UL", duration: 5, level: "Intermediate", Publication: false},
        {id: 3, title: "Full Stack Developer", duration: 9, level: "Advance", Publication: true},
        {id: 4, title: "Backend Developer", duration: 3, level: "Intermediate", Publication: false},
    ]
    return(
        <>
            <div className="course-card">
                    <h1 className='title'>Task 2 — Course Card</h1>
                    <div className="coursecard-grid">
                        {courses.map(course => (
                            <CourseCard
                                key={course.id}
                                name = {course.title}
                                duration = {course.duration}
                                level = {course.level}
                                publication = {course.Publication}
                            />
                        ))}
                    </div>
            </div>
        </>
    );
}


// =============================================================================
// Task 3 — Skills List

function ThreeInclude() {
    const skills = [
        {id: 1, title: "L", name: "Lalit", skills: ["HTML", "CSS"]},
        {id: 2, title: "A", name: "Amir", skills: []},
        {id: 3, title: "F", name: "Farhan", skills: ["JAVA", "SQL", "C##"]},
        {id: 4, title: "A", name: "Ammar", skills: ["Excel", "Word", "PPT"]}
    ];
    return(
        <>
            <div className="skill-list">
                <h1 className='title'>Task 3 — Skills List</h1>
                <div className="skillList-grid">
                    {skills.map(skill => (
                        <SkillList
                            key={skill.id}
                            title = {skill.title}
                            name = {skill.name}
                            skills = {skill.skills}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


// =============================================================================
// Task 4 — Reusable Panel

function FourInclude() {
    return(
        <>
            <div className="panel-group">
                <h1 className='title'>Task 4 — Reusable Panel</h1>
                <Panel title="announcement">
                    <p>this is a announcement Detail About.</p>
                </Panel>

                <Panel title = "learning topics.">
                    <ul>
                        <li>Maths</li>
                        <li>English Grammar</li>
                        <li>Any Code</li>
                    </ul>
                </Panel>

                <Panel title="Welcome to React">
                    <p>
                    Learn React step by step with
                    practical examples and projects.
                    </p>

                    <button>Start Learning</button>
                </Panel>
            </div>

        </>
    );
}


// =============================================================================


function IndividualTask() {
    return(
        <>
            <main className='container-IndividualTask'>
                {/* Task 1 — Reusable Profile Card */}
                <OneInclude/>

                {/* Task 2 — Course Card */}
                <TwoInclude/>

                {/* Task 3 — Skills List */}
                <ThreeInclude/>

                {/* Task 4 — Reusable Panel */}
                <FourInclude/>

            </main>
        </>
    );
}

export default IndividualTask;