import { useState } from 'react';
import './ContactForm.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [success, setSuccess] = useState(false);


    function handleChange(event){
        const {name, value} = event.target;

        console.log(name, value);
        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setSuccess(false);
    }

    function handleSubmit(event){
        event.preventDefault();

        const name = formData.name.trim();
        const email = formData.email.trim();
        const message = formData.message.trim()
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === "" || email === "" || message === ""){
            alert("Please fill in all fields.");
            return;
        }

        if(!emailPattern.test(formData.email)){
            alert("Please enter a valid email address.");
            return;
        }

        setSuccess(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }
  return (
    <div className="card-form">
        <h2 className="text-center">Exercise 1: Contact Form</h2>
        <form className="card" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    name='name'
                    placeholder='Name' 
                    onChange={handleChange}
                    value={formData.name} 
                />
            </div>
            <div>
                <label htmlFor="name">Email: </label>
                <input 
                    type="email" 
                    name='email'
                    placeholder='Eamil' 
                    onChange={handleChange}
                    value={formData.email}
                />
            </div>
            <textarea 
                name="message" 
                id="message" 
                placeholder='Meassage' 
                onChange={handleChange}
                value={formData.message}
            ></textarea>
            <button type="submit">Submit</button>

            {success && (
                <p className='success'>Thank you! Your message has been submitted successfully.</p>
            )}
        </form>
    </div>
  )
}

export default ContactForm