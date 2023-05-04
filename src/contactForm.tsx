import './contactForm.css'
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "GyJhhzXJ"; //fill with own formspark form ID to get your own backend working

/* This code exports a React component called `Application` that renders a contact form. The form uses
the `useFormspark` hook from the `@formspark/use-formspark` library to submit form data to a
Formspark form with the ID `GyJhhzXJ`. The component also uses the `useState` hook to manage the
state of the form inputs and checkboxes. When the form is submitted, the `onSubmit` function is
called, which prevents the default form submission behavior, calls the `submit` function from
`useFormspark` with the form data, and displays an alert message. */
export const Application = () => {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

        const onSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            await submit({ firstName, lastName, email, message });
            alert("Form submitted");
        };

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [isClient, setIsClient] = useState(false);
        const [isInvestor, setIsInvestor] = useState(false);

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2 style={{ fontWeight: 'bold'}}>Contact Us</h2>
                <form onSubmit={onSubmit} noValidate >
                    <div className="blurb" style={{ textAlign: 'center' }}>
                        <p style={{ marginBottom: '1rem' }}> Reach out to us by filling out this form!</p>
                        <p> If you're an interested client or investor, please also indicate so below.</p>
                    </div>
                    <div className='firstName'>
                        <label htmlFor="firstName">First Name</label>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='lastName'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="client-checkbox">
                        <input
                            type="checkbox"
                            id="isClient"
                            checked={isClient}
                            onChange={(e) => setIsClient(e.target.checked)}
                        />
                        <label htmlFor="isClient">Client</label>
                    </div>
                    <div className="investor-checkbox">
                        <input
                            type="checkbox"
                            id="isInvestor"
                            checked={isInvestor}
                            onChange={(e) => setIsInvestor(e.target.checked)}
                        />
                        <label htmlFor="isInvestor">Investor</label>
                    </div>
                    <div className='message'>
                        <label htmlFor="message">Message</label>
                        <textarea rows = {6} cols = {40} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className='submit'>
                        <button type = "submit" disabled={submitting}> Submit Message </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Application