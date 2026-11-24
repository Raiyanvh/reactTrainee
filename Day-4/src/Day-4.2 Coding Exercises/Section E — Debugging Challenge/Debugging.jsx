import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault();

    const newReuslt ={}

    if(!email.trim()){
      newReuslt.email = "Email is required!"
    }

    setError(newReuslt);
    console.log("Email:", email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {error && (
        <p>{error}</p>
      )}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;