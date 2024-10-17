import { useState } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Real-time validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!/^[A-Za-z\s]+$/.test(value)) {
          error = 'El nombre solo debe contener letras.';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'El correo electrónico no es válido.';
        }
        break;
      case 'message':
        if (value.length < 10) {
          error = 'El mensaje debe tener al menos 10 caracteres.';
        }
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there are any errors before sending
    if (Object.values(errors).some(err => err)) {
      return;
    }

    emailjs.send('service_u1ub83h', 'template_7mxjcti', formData, 'OHsMePtu703LrgNdc')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccessMessage('El correo se envió exitosamente.');
        
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // Hide success message after 10 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black">Contact Me</h2>
        <div className="max-w-md mx-auto space-y-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className={`w-full px-3 py-2 border rounded-md bg-white text-black ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              className={`w-full px-3 py-2 border rounded-md bg-white text-black ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              className={`w-full px-3 py-2 border rounded-md bg-white text-black ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black" type="submit">Send Message</button>
          </form>
          {successMessage && (
            <div className="mt-4 p-3 bg-green-500 text-white rounded-md">
              <p className="text-center">{successMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
