import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "../Contact/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission (e.g., sending data to a server)
    console.log("Form submitted:", formData);

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-50px)" },
  });

  const buttonSpring = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
    config: { tension: 200, friction: 10 },
    reset: true,
  });

  return (
    <>
      <div className="row d-flex">
        <div className="col-sm-12 col-lg-6">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5578887829824!2d78.56601737438879!3d17.384994383501795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f7e7084a10d%3A0x46734f5fec529ac3!2sWASSAN%20(Watershed%20Support%20Services%20and%20Activities%20Network)!5e0!3m2!1sen!2sin!4v1696157685913!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <animated.div
            style={formAnimation}
            className="contact-form-container"
          >
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <animated.button
                style={buttonSpring}
                type="submit"
                className="submit-button"
              >
                Send
              </animated.button>
            </form>
          </animated.div>
        </div>
      </div>
    </>
  );
};
