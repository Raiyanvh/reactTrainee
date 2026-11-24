import { useState } from 'react';
import './PracticalChallenge.css';

function PracticalChallenge() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        password: ""
    });

    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false)

    function handleChange(event){
        const {name, value} = event.target;
        console.log(name, value)

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setSuccess(false);
    }
    
    function handleSubmit(event){
        event.preventDefault();;

        const newResult = {}
        const name = formData.name.trim();
        const email = formData.email.trim();
        const phone = formData.phone.trim();
        const course = formData.course.trim();
        const password = formData.password.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;

        if(!name){
            newResult.name = "Name is required!"
        }

        if(!email){
            newResult.email = "Email is required!"
        } else if(!emailPattern.test(email)){
            newResult.email = "Enter Eamil inVlid format check."
        }

        if(!phone){
            newResult.phone = "Phone is required!"
        } else if(!phonePattern.test(phone)) {
            newResult.phone = "Mobile number must contain 10 digits" 
        }

        if(!course){
            newResult.course = "Course must be selected." 
        }

        if(!password){
            newResult.password = "Password is required!"
        } else if(password.length < 8) {
            newResult.password = "Password must contain at least eight characters."
        }
        
        console.log(error);
        setError(newResult);
        setSuccess(false);

        if(Object.keys(newResult).length === 0){
            setSuccess(true);

            setFormData({
                name: "",
                email: "",
                phone: "",
                course: "",
                password: ""
            });
        }
    }


  return (
    <div className="card-form">
        <h1 className="text-center">Build a Student Registration Form</h1>
        <form className="practical" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Full name: </label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    placeholder="Full Name" 
                    onChange={handleChange}
                />
                {error.name && (
                    <p className='practical-error'>{error.name}</p>
                )}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    placeholder="Email" 
                    onChange={handleChange}
                />
                {error.email && (
                    <p className='practical-error'>{error.email}</p>
                )}
            </div>
            <div>
                <label htmlFor="phone">Phone Number: </label>
                <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    placeholder="*** *** 1450" 
                    onChange={handleChange}
                />
                {error.phone && (
                    <p className='practical-error'>{error.phone}</p>
                )}
            </div>
            <div>
                <label htmlFor="course">Course: </label>
                <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                >
                    <option value="">Select a course</option>
                    <option value="React.js">React.js</option>
                    <option value="Node.js">Node.js</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="Frontend Development">Frontend Development</option>
                </select>
                {error.course && (
                    <p className='practical-error'>{error.course}</p>
                )}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    placeholder="Password" 
                    onChange={handleChange}
                />
                {error.password && (
                    <p className='practical-error'>{error.password}</p>
                )}
            </div>
            <button type='submit'>Submit</button>

            {success && (
                <p className='practical-success'>thank you!, got register success🎉</p>
            )}
        </form>
    </div>
  )
}

export default PracticalChallenge