import { useState } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_u1ub83h', 'template_7mxjcti', formData, 'OHsMePtu703LrgNdc')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
