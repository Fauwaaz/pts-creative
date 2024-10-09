import React from 'react';
import { useState } from 'react';
// import { sendEmail } from '../actions/sendEmail';

const ContactForm = () => {

  const [formData, setFormData] = useState({ name: '', email: '', number: '', industry: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x5E-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x1F\x21-\x5A\x5E-\x7F])*")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])*\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])*)$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    const newError = validateField(id, value);
    if (newError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: newError,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const { name, email, number, industry, message } = formData;

    if (!name.trim()) newErrors.name = "* Name is Required";
    else if (name.length > 20 || name.length < 3) newErrors.name = name.length > 20 ? "Name should not exceed 20 characters." : "Name should be at least 3 characters long.";
    
    if (!email.trim()) newErrors.email = "* Email is Required";
    else if (!emailRegex.test(email)) newErrors.email = 'Email is invalid';

    if (!number.trim()) newErrors.number = "* Number is Required";
    else if (number.length !== 10) newErrors.number = 'Invalid Number';

    if (!industry.trim()) newErrors.industry = "* Company name is required";
    else if (industry.length <= 10 || industry.length > 20) newErrors.industry = 'Provide genuine company name';

    if (!message.trim()) newErrors.message = '* Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (fieldId: string, value: string): string | null => {
    switch (fieldId) {
      case 'name':
        if (!value.trim()) {
          return '* Name is Required';
        } else if (value.length > 20 || value.length < 3) {
          return value.length > 20 ? "Name should not exceed 20 characters." : "Name should be at least 3 characters long.";
        }
        return null;
      case 'email':
        if (!value.trim()) {
          return '* Email is Required';
        } else if (!emailRegex.test(value)) {
          return 'Email is invalid';
        }
        return null;
      case 'number':
        if (!value.trim()) {
          return '* Number is Required';
        } else if (value.length !== 10) {
          return 'Invalid Number';
        }
        return null;
      case 'industry':
        if (!value.trim()) {
          return '* Company name is required';
        }
        return null;
      case 'message':
        if (!value.trim()) {
          return '* Message is required';
        }
        return null;
      default:
        return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);  
        setErrors({}); 
      } else {
        setErrors({ form: 'Failed to submit the form. Please try again.' });
      }
    } catch (error) {
      setErrors({ form: 'An error occurred while submitting the form.' });
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="success-message">
          <p className='desc text-center'>Thank you! Your message has been successfully submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}
          action={(formData) => {
            console.log("Runing On client")
            console.log(formData.get("senderEmail"));
            console.log(formData.get("senderName"));
            console.log(formData.get("senderPhone"));
            // await sendEmail(formData);
          }}
        >
          <div className='grid-2'>
            <div className='inputs'>
              {/* <label htmlFor="name">Name:</label> */}
              <input
                placeholder='Name'
                type="text"
                id="name"
                name="senderName"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete='off'
              />
              {errors.name && <span className='errors'>{errors.name}</span>}
            </div>
            <div className='inputs'>
              {/* <label htmlFor="email">Email:</label> */}
              <input
                placeholder='Email'
                type="email"
                id="email"
                name="senderEmail"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete='off'  
              />
              {errors.email && <span className='errors'>{errors.email}</span>}
            </div>
          </div>

          <div className='grid-2'>
            <div className='inputs'>
              {/* <label htmlFor="number">Number:</label> */}
              <input
                placeholder='Contact Number'
                type="number"
                id="number"
                name="senderPhone"
                value={formData.number}
                onChange={handleInputChange}
                maxLength={10}
                autoComplete='off'
              />
              {errors.number && <span className='errors'>{errors.number}</span>}
            </div>
            <div className='inputs'>
              {/* <label htmlFor="industry">Company:</label> */}
              <input
                placeholder='Company Name'
                type="text"
                id="industry"
                value={formData.industry}
                onChange={handleInputChange}
                autoComplete='off'
              />
              {errors.industry && <span className='errors'>{errors.industry}</span>}
            </div>
          </div>

          <div className='inputs'>
            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              placeholder='Message'
              id="message"
              cols={30}
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              autoComplete='off'
            />
            {errors.message && <span style={{ marginTop: '-8px' }} className='errors'>{errors.message}</span>}
          </div>
          <button type="submit" className='button-secondary'>Send</button>
        </form>
      )}

    </>
  );
};

export default ContactForm;