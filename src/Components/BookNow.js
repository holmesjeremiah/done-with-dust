import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import CustomButton from './Elements/CustomButton';
import emailjs from 'emailjs-com';


function BookNow({ closeModal, }) {
    const [errors, setErrors] = useState({});
    const [appointmentSent, setAppointmentSent] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        serviceType: '',
        date: '',
        specialInstructions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            formIsValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            formIsValid = false;
        }

        // Phone Number validation (simple check, can be improved)
        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = 'Phone number is required';
            formIsValid = false;
        }

        // Service Type validation
        if (!formData.serviceType) {
            errors.serviceType = 'Please select a service type';
            formIsValid = false;
        }

        // Date validation
        if (!formData.date) {
            errors.date = 'Please select a preferred date';
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    const sendEmail = (formData) => {
        formData.website = 'done-with-dust'
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_USER_ID)
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail(formData);
            setAppointmentSent(true)
        } else {
            console.log('Form has errors:', errors);
        }

    };

    if (appointmentSent) {
        return (
            <Container fluid className="d-flex h-100">
                <Row className="justify-content-center align-self-center w-100">
                    <Col xs={12} md={8} lg={6} className="text-center">
                        <p>Your appointment request has been successfully submitted. To confirm your appointment, please call us at <a href="tel:816-920-3959">816-920-3959</a>.</p>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            isInvalid={!!errors.phoneNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.phoneNumber}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formServiceType">
                        <Form.Label>Service Type</Form.Label>
                        <Form.Select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            isInvalid={!!errors.serviceType}
                        >
                            <option>Select a service...</option>
                            <option value="basic">Basic Cleaning</option>
                            <option value="deep">Deep Cleaning</option>
                            <option value="moveOut">Move-Out/Move-In Cleaning</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {errors.serviceType}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    isInvalid={!!errors.date}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.date}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSpecialInstructions">
                <Form.Label>Special Instructions</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Any special instructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                />
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
                <a onClick={handleSubmit}>
                    <CustomButton buttonText='Submit' />
                </a>
            </div>
        </Form>
    );
}

export default BookNow;