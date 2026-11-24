import { useState } from 'react';
import './ContactForm.css'


// 3. Creating a Basic Form

function ContactForm() {
    function handleSumbit(event) {
        event.preventDefault();
        alert("Form Submitted!");
    }
  return (
    <div>
        <form className="card-form contact-form" onSubmit={handleSumbit}>
            <h1 className="text-center">3. Creating a Basic Form</h1>
            <label>
                Name:
                <input type="text" name="name" placeholder='Text Typing'/>
            </label>
            <button className='btn-sumbit' type='submit'>Submit</button>
        </form>
    </div>
  )
}

// =========================================================================
// 4. What Is a Controlled Input?

function Controlled() {
    const [name, setName] = useState("");
    return(
        <div className='card-form controlled'>
            <h1 className='text-center'> 4. What Is a Controlled Input?</h1>
            <form>
                <label htmlFor="name">Name: </label>

                <input 
                    id='name'
                    type="text"
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                    placeholder='Any write'
                />

                <p>Your name: {name}</p>
            </form>
        </div>
    );
}




// =========================================================================
// 9. Complete Example: Registration Form

function RegistrationForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setError((previousErrors) => ({
            ...previousErrors,
            [name]: ""
        }));

        setSubmitted(false);
    }

    function click(event) {
        console.log(event.target);
    }

    function handleSumbit(event){
        event.preventDefault();
        const newErrors = {};
        const name = formData.name.trim();
        const email = formData.email.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(!name) {
            newErrors.name = "Name is required!";
        }

        if(!email){
            newErrors.email = "Email is required."
        } else if(!emailPattern.test(email)) {
            newErrors.email = "Enter a valid email address."
        }

        if(formData.password.length < 8){
            newErrors.password = "Password must contain at least 8 characters.";
        }

        setError(newErrors);
        setSubmitted(false);

        if(Object.keys(newErrors).length === 0){
            setSubmitted(true);
            console.log(name, email, formData.password);
        }

    }

    

    return(
        <div className="card-form handling-multiple">
            <h1 className='text-center'>Registration Form</h1>
            <form onSubmit={handleSumbit} onClick={click}>
                <div>
                    <label htmlFor="name">Full name: </label>
                    <input
                        id='name'
                        name='name'
                        value={formData.name}
                        placeholder='Name'
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name? "name-error" : undefined}
                        
                    />

                    {errors.name && (
                        <p id='name-error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        id='email'
                        name='email'
                        value={formData.email}
                        placeholder='Email'
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email? "email-error" : undefined}
                    />

                    {errors.email && (
                        <p id='email-error'>{errors.email}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={formData.password}
                        placeholder='Password'
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.password)}
                        aria-describedby={errors.password? "password-error" : undefined}
                    />

                    {errors.password && (
                        <p id='password-error'>{errors.password}</p>
                    )}
                </div>
                <button type="submit">Register</button>
            </form>
            {submitted && (
                <p role='status'>Registration form is valid!</p>
            )}
        </div>
    );
}



function Form(){
    return(
        <div>
            <div className="container">
                {/* 3. Creating a Basic Form */}
                <ContactForm/>
                
                {/* 4. What Is a Controlled Input? */}
                <Controlled/>

                {/* 5. Handling Multiple Form Fields */}
                <RegistrationForm/>

            </div>
        </div>
    )
}

export default Form