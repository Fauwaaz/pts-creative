import { useState } from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        industry: '',
        message: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

      const email  = '';
      
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
            } else if (!/\S+@\S+\.\S+/.test(email)) {
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

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        const { name, email, number, industry, message } = formData;

        if (!name.trim()) newErrors.name = "* Name is Required";
        else if (name.length > 20 || name.length < 3) newErrors.name = name.length > 20 ? "Name should not exceed 20 characters." : "Name should be at least 3 characters long."; 
        if (!email.trim()) newErrors.email = "* Email is Required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        if (!number.trim()) newErrors.number = "* Number is Required";
        else if (number.length !== 10) newErrors.number = 'Invalid Number';
        if (!industry.trim()) newErrors.industry = "* Company name is required";
        else if (industry.length <= 10 || industry.length > 20) newErrors.industry = 'Provide genuine company name';
        if (!message.trim()) newErrors.message = '* Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    alert('Message sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        number: '',
                        industry: '',
                        message: '',
                    });
                    setErrors({});
                } else {
                    alert('Failed to send message. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='grid-2'>
                    <div className='inputs'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <span className='errors'>{errors.name}</span>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <span className='errors'>{errors.email}</span>}
                    </div>
                </div>

                <div className='grid-2'>
                    <div className='inputs'>
                        <label htmlFor="number">Number:</label>
                        <input
                            type="number"
                            id="number"
                            value={formData.number}
                            onChange={handleInputChange}
                            maxLength={10}
                        />
                        {errors.number && <span className='errors'>{errors.number}</span>}
                    </div>
                    <div className='inputs'>
                        <label htmlFor="industry">Company:</label>
                        <input
                            type="text"
                            id="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                        />
                        {errors.industry && <span className='errors'>{errors.industry}</span>}
                    </div>
                </div>

                <div className='inputs'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        cols={30}
                        rows={10}
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    {errors.message && <span style={{marginTop:'-8px'}} className='errors'>{errors.message}</span>}
                </div>
                <button type="submit" className='button-primary'>Send</button>
            </form>
        </>
    );
};

export default ContactForm;