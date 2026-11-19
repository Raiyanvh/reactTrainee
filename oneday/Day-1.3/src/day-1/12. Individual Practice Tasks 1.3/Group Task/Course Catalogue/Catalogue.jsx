import '../GroupTask.css';
import CatalogueCard from './CatalogueCard';

function Catalogue() {
    const catalogues = [
        {id: 1, title: "Web Development", duration: 4, level: "Beginner", availability: false},
        {id: 2, title: "Data Science", duration: 9, level: "Intermediate", availability: true},
        {id: 3, title: "Deep Learning", duration: 15, level: "Beginner", availability: true},
        {id: 4, title: "Digtal Marketing", duration: 10, level: "Advanced", availability: false},
        {id: 5, title: "Machine Learning", duration: 20, level: "Advanced", availability: true}
    ]
    return(
        <>
            <div className="catalogue-group">
                <h1 className='text-center'>Group Task 2 — Course Catalogue</h1>
                <div className="catalogue-list">
                    {catalogues.map(catalogue => (
                        <CatalogueCard
                            key = {catalogue.id}
                            title = {catalogue.title}
                            duration = {catalogue.duration}
                            level = {catalogue.level}
                            availability = {catalogue.availability}
                        />
                    ))}
                </div>
            </div>  
        </>
    );
}

export default Catalogue;