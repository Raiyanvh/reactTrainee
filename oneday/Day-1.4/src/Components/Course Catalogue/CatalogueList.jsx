import CatalogueCard from "./CatalogueCard";
import './Catalogue.css'

function CatalogueList(){
    const courses = [
        {id: 1, title: "🧮 Maths", duration: 5, enrolemnt: true},
        {id: 2, title: "🔬 Science", duration: 15, enrolemnt: false},
        {id: 4, title: "💻 Freelance", duration: 2, enrolemnt: false},
        {id: 3, title: "🏪 Shopify", duration: 9, enrolemnt: true},
    ]
    return(
        <>
            <section className="group-componentName">
                <h1 className="text-center">Question 30 — Course Catalogue</h1>
                <div className="list-grid">
                    {courses.length > 0 ? 
                        (courses.map(course => (
                            <CatalogueCard
                                key = {course.id}
                                title = {course.title}
                                duration = {course.duration}
                                enrolment = {course.enrolemnt}
                            />
                        ))) : 
                        (
                            <p className="text-center">Empty Courses Array list. </p>
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default CatalogueList;