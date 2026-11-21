import './CompletedTasks.css'

function CompletedTasks() {
    const tasks = [
        {id: 1, title: "Project Ecommerce", completed: true},
        {id: 2, title: "Check attack document", completed: true},
        {id: 3, title: "Laptop repaire", completed: false}
    ];

    const completed = tasks.filter(task => task.completed);
  return (
    <div>
        <div className="complete-task">
            <ul>
                {completed.length > 0?
                    (completed.map(task => (
                        <li key={task.id}>{task.title}</li>
                    ))) : 
                    (
                        <p className="text-center">No completed tasks</p>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default CompletedTasks