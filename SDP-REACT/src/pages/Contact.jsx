import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../comp_css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with Ice Cream Delight!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9440388942</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>carniwalls@icecreamdelight.com</p>
              <p>support@icecreamdelight.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>Carni Walls, National Highway, Beside Hotel Nellore Grand, Kovur, Nellore</p>
              <p>Flavor Town, FT 12345</p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock className="contact-icon" />
            <div>
              <h3>Hours</h3>
              <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
              <p>Sat - Sun: 10:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us on the below pages</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;