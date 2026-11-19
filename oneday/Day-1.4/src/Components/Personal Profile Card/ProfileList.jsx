import ProfileCard from "./ProfileCard";
import "./Profile.css"

function ProfileList() {
    const profiles = [
        {id: 1, name: "Lalit", role: "Senior Assistant", skills: ["Packing Station", "Quantity Check"], completedCourses: 10},
        {id: 2, name: "Arkan", role: "Frontend Developer", skills: ["HTML", "CSS", "JavaScript"], completedCourses: 6},
        {id: 3, name: "Kais", role: "Digtal Marketing", skills: ["Google ads", "Affiliate Marketing"], completedCourses: 13},
        {id: 4, name: "Ammar", skills: ["Excel", "Word", "PPT"], completedCourses: 14},
        {id: 5, name: "Rahil", skills: [], role: "Backend Developer", completedCourses: 30},
    ]
    return (
        <>
            <div className="group-componentName">
                <h1 className="text-center">👤 Question 29 — Personal Profile Card</h1>
                <div className="list-grid">
                    {profiles.map(profile => (
                        <ProfileCard
                            key = {profile.id}
                            id = {profile.id}
                            name = {profile.name}
                            role = {profile.role}
                            skills = {profile.skills}
                            completedCourses = {profile.completedCourses}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProfileList;