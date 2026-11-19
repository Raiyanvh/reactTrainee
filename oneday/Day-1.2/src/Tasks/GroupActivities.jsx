import './Groupactivities.css';


// Group Task 1 — E-commerce product listing
function GroupActivities(){
    const products = [
        {id: 1, img: "💻", name: "Laptop ", price: 20000, category: "Electronics", Availability: false},
        {id: 2, img: "🛍️", name: "Bag", price: 1500, category: "Bags & Luggage", Availability: false},
        {id: 3, img: "🎧", name: "Wireless Headphones", price: 3500, category: "Electronics", Availability: true},
        {id: 4, img: "📚", name: "Essays", price: 7500, category: "Books", Availability: true},
        {id: 5, img: "💄", name: "Lips", price: 500, category: "MarkUp", Availability: true},
        {id: 6, img: "🥼", name: "Coat", price: 1000, category: "Cloths", Availability: true},
    ];
    return(
        <>
            <div className="container-all">
                <div className="heading">
                    <h1>Welcome, E-commerce product</h1>
                    <small>{products.length} Products</small>
                </div>
                {products.length > 0? (
                    <div className="product-list">
                        {products.map(product => (
                            <article className='prodcut-card' key={product.id}>
                                <div className="icon">
                                    {product.img}
                                </div>
                                <h3 className='title-product'>{product.name}</h3>
                                <p className='text-category'>{product.category}</p>
                                <button className={product.Availability? "available-product" : "outofstock-product"}>{product.Availability? "available" : "Out of Stock"}</button>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p className='text-noavailable'>No Available list.</p>
                )}                
            </div>
        </>
    );
}

//===================================================================
// Group Task 2 — Student directory

function StudentDirectory(){
    const students = [
        {id: 1, circle: "A", name: "Ammar", role: "DEO", skills: ["excel", "word", "PPT"], completedtask: "✔️ 10 Completed Tasks"},
        {id: 2, circle: "K", name: "Kais", role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"], completedtask: "✔️ 5 Completed Tasks"},
        {id: 3, circle: "L", name: "Lalit", role: "Frontend Developer", skills: ["React.js", "CSS", "HTML"], completedtask: "✔️ 15 Completed Tasks"},
        {id: 4, circle: "P", name: "Priyal", role: "Full stack Developer", skills: ["React.js", "JavaScript"], completedtask: "✔️ 15 Completed Tasks"},
    ];

    return(
        <>
            <div className="card-student">
                {students.map(student => (
                    <div className="card-child" key={student.id}>
                        <div className="heading-profile">
                            <div className="heading-title">
                                <div className="circle">
                                    {student.circle}
                                </div>
                                <p className='profile-title'>{student.name}</p>
                            </div>
                            <p className='card-role'>{student.role}</p>
                        </div>
                        <div className="skill">
                            <h3>Skill</h3>
                            <div className="btn-flex">
                                {student.skills.map((skill, index) => (
                                    <button key={`${student.id}-${skill}-${index}`} className='btn-skill'>
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className='comle-task'>{student.completedtask}</p>
                    </div>
                ))}
            </div>
        </>
    );
}


//===================================================================
// Group Task 3 — Result dashboard

function ResultDashboard() {
    const dashboardStudents = [
        {id: 1, name: "Rahil", marks: 75},
        {id: 2, name: "Lalit", marks: 45},
        {id: 3, name: "Arsh", marks: 65},
        {id: 4, name: "Arkan", marks: 30},
        {id: 5, name: "Kais", marks: 85}
    ];

    const passed = dashboardStudents.filter(dashStudent => dashStudent.marks >= 50).length;
    const failed = dashboardStudents.filter(dashStudent => dashStudent.marks <= 50).length;

    return(
        <>
            <div className="dashboard-student">
                <h1 className='title-student'>Student Result dashboard</h1>
                <div className="result-number-list">
                    <div className="pass-item">
                        <h1>{passed}</h1>
                        <p>Passed Students</p>
                    </div>

                    <div className="fail-item">
                        <h1>{failed}</h1>
                        <p>Failed Students</p>
                    </div>
                </div>
                <div className="dashboard-list">
                    {dashboardStudents.map(dashStudent => (
                        <div className="student-item" key={dashStudent.id}>
                            <h2 className='title-dashstudent'>{dashStudent.name}</h2>
                            <p className='student-marks'>Marks: {dashStudent.marks}</p>
                            <button className={`result-student ${dashStudent.marks >= 50? "dashpassed" : "dashfail"}`}>
                                {dashStudent.marks >= 50? ("Passed") : ("Failed")}
                            </button>

                            {dashStudent.marks >= 80 && (
                                <p className='congration'>Congratulations!, Above 80 Good!</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


// 12. Predict the Output
// Write the expected output before running each example.


// All combine execute it
function combineTask(){
    return(
        <>
            <h1 className='title-heading'>Group Task 1 — E-commerce product listing</h1>
            <GroupActivities/>
            <h1 className='title-heading'>Group Task 2 — Student directory</h1>
            <StudentDirectory/>
            <h1 className='title-heading'>Group Task 3 — Result dashboard</h1>
            <ResultDashboard/>
        </>
    )
}

export default combineTask;