function WelcomePanel({studentName}) {
    return(
        <section className="welcome-panel">
            <h2>Welcome, {studentName}!</h2>
            <p>Keep learning and building projects.</p>
        </section>
    );
}

export default WelcomePanel;