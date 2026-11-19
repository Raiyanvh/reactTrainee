import PanelCard from "./PanelCard";
import "./Panel.css"

function PanelList() {
    return(
        <>
            <section className="group-componentName">
                <h2 className="text-center">Question 31 — Reusable Panel</h2>
                <div className="panelList">
                    <PanelCard title="The course have Affiliate Marketing">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                            rem. Aut eligendi neque ratione iusto? Ea sunt quis quidem? Porro!
                        </p>
                    </PanelCard>

                    <PanelCard title="Learning Skills list">
                        <ul>
                            <li>Github</li>
                            <li>JAVA</li>
                            <li>Python</li>
                        </ul>
                    </PanelCard>

                    <PanelCard title= "Eassay story end.">
                        <p>There Libery of book on story topic different.</p>
                    </PanelCard>
                </div>
            </section>
        </>
    );
}

export default PanelList;