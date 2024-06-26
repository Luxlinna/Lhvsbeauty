// npm install react-on-screen emailjs-com
// npm install animate.css


import React, { useState } from "react";
import contactImg from "./contact.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import './contact.css';
import Discount from "../../discount/Discount";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    for (let key in formDetails) {
      if (formDetails[key].trim() === '') {
        setStatus({ success: false, message: `${key.charAt(0).toUpperCase() + key.slice(1)} is required` });
        return;
      }
    }

    setButtonText("Sending...");

    try {
      await emailjs.send('service_dn5gsqt', 'template_bb3389c', formDetails, 'yzNKYMDbF97MWMbgl');
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonText("Send");
      setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <>
      <section className="contact py-12">
        <Container>
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                }
              </TrackVisibility>
            </Grid>
            <Grid item xs={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <Typography variant="h4" component="h2" className="mb-4 text-purple-900">Get In Touch</Typography>
                    <form onSubmit={handleSubmit} className="form">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="First Name"
                            value={formDetails.firstName}
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Last Name"
                            value={formDetails.lastName}
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            type="email"
                            value={formDetails.email}
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Phone No."
                            type="tel"
                            value={formDetails.phone}
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={6}
                            value={formDetails.message}
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button type="submit" variant="contained" color="primary" fullWidth>
                            <span className="md:text-xl">{buttonText}</span>
                          </Button>
                        </Grid>
                        {status.message && (
                          <Grid item xs={12}>
                            <Typography className={status.success ? "text-green-500" : "text-red-500"}>{status.message}</Typography>
                          </Grid>
                        )}
                      </Grid>
                    </form>
                  </div>
                }
              </TrackVisibility>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Discount />
    </>
    
  );
};







