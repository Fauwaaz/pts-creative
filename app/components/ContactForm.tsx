import React, { useState } from 'react';
// import { sendEmail } from '../actions/sendEmail';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', number: '', industry: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const emailRegex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;


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

    const isValid = Object.keys(newErrors).length === 0;
    if (!isValid) {
      setIsSubmitted(false);
    } else {
      setFormData({
        name: "",
        email: "",
        number: "",
        industry: "",
        message: "",
      });
    }

    return validateForm;
  };

  const validateField = (fieldId: string, value: string): string | null => {
    switch (fieldId) {
      case 'name':
        if (!value.trim()) return '* Name is Required';
        else if (value.length > 20 || value.length < 3) return value.length > 20 ? "Name should not exceed 20 characters." : "Name should be at least 3 characters long.";
        return null;
      case 'email':
        if (!value.trim()) return '* Email is Required';
        else if (!emailRegex.test(value)) return 'Email is invalid';
        return null;
      case 'number':
        if (!value.trim()) return '* Number is Required';
        else if (value.length !== 10) return 'Invalid Number';
        return null;
      case 'industry':
        if (!value.trim()) return '* Company name is required';
        return null;
      case 'message':
        if (!value.trim()) return '* Message is required';
        return null;
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!validateForm()) return;
  };

  return (
    <>
      <form onSubmit={handleSubmit}
        // action={async (formData) => {
        //   await sendEmail(formData)
        // }}
      >
        <div className="grid-2">
          <div className="inputs">
            <input
              // name="senderName"
              placeholder="Name"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="off"
            />
            {errors.name && <span className="errors">{errors.name}</span>}
          </div>
          <div className="inputs">
            <input
              placeholder="Email"
              type="email"
              id="email"
              // name="senderEmail"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="off"
            />
            {errors.email && <span className="errors">{errors.email}</span>}
          </div>
        </div>

        <div className="grid-2">
          <div className="inputs">
            <input
              // name="senderNumber"
              placeholder="Contact Number"
              type="number"
              id="number"
              value={formData.number}
              onChange={handleInputChange}
              autoComplete="off"
            />
            {errors.number && <span className="errors">{errors.number}</span>}
          </div>
          <div className="inputs">
            <input
              placeholder="Company Name"
              type="text"
              id="industry"
              value={formData.industry}
              onChange={handleInputChange}
              autoComplete="off"
              // name='senderIndustry'
            />
            {errors.industry && <span className="errors">{errors.industry}</span>}
          </div>
        </div>

        <div className="inputs">
          <textarea
            // name="senderMessage"
            placeholder="Message"
            id="message"
            cols={30}
            rows={1}
            value={formData.message}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {errors.message && <span className="errors" style={{ marginTop: "-8px" }}>{errors.message}</span>}
        </div>
        <button type="submit" className="button-secondary">
          Send
        </button>

        {errors.form && <span className="form-error">{errors.form}</span>}
      </form>
      {
        isSubmitted &&
        <div className="success">
          <p className="desc text-center">Thank you! Your message has been successfully submitted.</p>
        </div>
      }
    </>
  );
};

export default ContactForm;