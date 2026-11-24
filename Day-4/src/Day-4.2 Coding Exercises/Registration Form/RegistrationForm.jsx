import { useState } from 'react';
import './RegistrationForm.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    });


    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;

        // console.log(name, value);
        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setError((previous) => ({
            ...previous,
            [name]: ""
        }));

        setSuccess(false);

    }

    // function handleClick(event) {
    //     console.log(event.target);
    // }

    function handleSubmit(event){
        event.preventDefault();

        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const name = formData.name.trim();
        const email = formData.email.trim();
        const password = formData.password.trim();
        const passwordConfirm = formData.confirm.trim();

        if(!name){
            newErrors.name = "Name is Required!"
        }

        if(!email){
            newErrors.email = "Eamil is Required!"
        } else if(!emailPattern.test(email)){
            newErrors.email = "Enter a valid email address."
        }

        if(password.length < 8){
            newErrors.password = "Password is least 8 characters!"
        } 

        if(passwordConfirm.length < 8) {
            newErrors.passwordConfirm = "Confirm password least 8 characters!  "
        } else if(password !== passwordConfirm) {
            newErrors.passwordConfirm = "same password and confirm"
        }

        setSuccess(false);
        setError(newErrors);

        if(Object.keys(newErrors).length === 0) {
            setSuccess(true);
        }

        console.log(Object.keys(newErrors));
    }


  return (
    <div className="card-form">
        <h2 className="text-center">Exercise 2: Registration Form</h2>
        <form className="card-register" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name: </label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    placeholder="Full Name"
                    onChange={handleChange}
                />
                {error.name && (
                    <p className='error-message'>{error.name}</p>
                )}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                {error.email && (
                    <p className='error-message'>{error.email}</p>
                )}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                    type="text" 
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                />
                {error.password && (
                    <p className='error-message'>{error.password}</p>
                )}
            </div>
            <div>
                <label htmlFor="confirm">Confirm password: </label>
                <input 
                    type="text" 
                    name="confirm"
                    value={formData.confirm}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                />
                {error.passwordConfirm && (
                    <p className='error-message'>{error.passwordConfirm}</p>
                )}
            </div>
            <button type="submit">Register Submit</button>

            {success && (
                <p className='success-register'>you! Your message has been submitted successfully.</p>
            )}
        </form>
    </div>
  )
}

export default RegistrationForm