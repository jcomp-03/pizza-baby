import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";

function Join() {
  // state for form inputs
  const [formState, setFormState] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    yearsOfExperience: "1",
  });

  // determine if submit button is disabled or not
  const validate = () => {
    return formState.fullName &&
      formState.contactNumber &&
      formState.email &&
      formState.yearsOfExperience
      ? false
      : true;
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log("formState is now", formState);
  };

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("handleFormSubmit ran");
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
              placeholder="i.e. 123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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

          <Form.Group className="form__group" controlId="formYearsExperience">
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
