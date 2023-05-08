import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { ToastSuccess, ToastFailure } from "./Toast";

function Join() {
  // state for form inputs
  const [formState, setFormState] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    yearsOfExperience: "1",
    role: "",
  });
  const [isToastSuccessful, setIsToastSuccessful] = useState(false);
  const [isToastFailure, setIsToastFailure] = useState(false);

  // determine if submit button is disabled or not
  const validate = () => {
    return formState.fullName &&
      formState.contactNumber &&
      formState.email &&
      formState.yearsOfExperience
      ? false
      : true;
  };

  const clearForm = () => {
    setFormState({
      fullName: "",
      contactNumber: "",
      email: "",
      yearsOfExperience: "1",
      role: "",
    });
  };
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    setIsToastSuccessful(false);
    setIsToastFailure(false);
    event.preventDefault();
    console.log("handleFormSubmit ran");
    const { fullName, contactNumber, email, yearsOfExperience, role } =
      formState;
    try {
      const templateParams = {
        fullName,
        contactNumber,
        email,
        yearsOfExperience,
        role,
      };
      // send data now
      const response = await emailjs.send(
        "default_service",
        import.meta.env.EMAILJS_TEMPLATE_ID,
        templateParams
      );
      console.log("response is", response);
      response.status == 200 ? setIsToastSuccessful(true) : setIsToastFailure(true);
      clearForm();
    } catch (error) {
      console.log("Error occurred during form submission\n", error);
      setIsToastFailure(true);
    }
  };

  return (
    <section id="join" className="section section__join">
      <h1 className="section__title">Join Us</h1>
      <div className="section__content">
        We are looking for passionate people to join our upstart team at Pizza
        Baby! If you want to learn more about the positions available, fill out
        this form -- we promise we review each form submission!
      </div>
      <div className="handshake">
        <FontAwesomeIcon
          className="font-awesome handshake-icon"
          icon={faHandshakeSimple}
        />
        <Form className="form" onSubmit={handleFormSubmit}>
          {isToastSuccessful && <ToastSuccess />}
          {isToastFailure && <ToastFailure />}
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full name:</Form.Label>
            <Form.Control
              placeholder="i.e. John Smith"
              value={formState.fullName}
              name="fullName"
              className="form__input"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContactNumber">
            <Form.Label>Best contact number:</Form.Label>
            <Form.Control
              type="tel"
              placeholder="i.e. 1234567890"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={formState.contactNumber}
              name="contactNumber"
              className="form__input"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="i.e. john@contoso.com"
              value={formState.email}
              name="email"
              className="form__input"
              onChange={handleChange}
            />
            <Form.Text className="form__text">
              We don't share your email with any third party.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formYearsExperience">
            <Form.Label>
              How many years of restaurant experience do you bring?
            </Form.Label>
            <Form.Select
              className="form__input"
              aria-label="Default select example"
              size="md"
              value={formState.yearsOfExperience}
              onChange={handleChange}
              name="yearsOfExperience"
            >
              <option value="1">1 or less</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10+</option>
            </Form.Select>
            <Form.Text className="form__text">
              This answer helps to give us a baseline on your profile.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>What role are you interested in?</Form.Label>
            <Form.Control
              placeholder=""
              value={formState.role}
              name="role"
              className="form__input"
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="form__button"
            variant="primary"
            type="submit"
            disabled={validate()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Join;
