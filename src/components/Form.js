import "./FormStyles.css";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Form = () => {
  const [state, handleSubmit] = useForm("xjvzgnkl");
  if (state.succeeded) {
      alert("Thanks for connecting!")
  }

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
           <label>Your Name</label>
           <input name="name" type="text"  />
           <label>Email</label>
           <input name="email" type="email"  />
           <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
           <label>Subject</label>
           <input name="subject" type="text"  />
           <label>Message</label>
           <textarea name="message" rows="6" placeholder="Type your message here" />
           <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
           <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}
