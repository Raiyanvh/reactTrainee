

function Result() {
    const marks = 95;

    let message;

    if (marks >= 80) {
        message = "Excellent";
    } else if(marks >= 60) {
        message = "Good";
    } else if(marks >= 40) {
        message = "Passed";
    } else {
        message = "Need Improvement";
    }

    return <h2>{message}</h2>
}

export default Result;