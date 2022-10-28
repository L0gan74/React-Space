import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg";

function Contact() {
  const formInitialDetails = {
    firsName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6}>
                  <input
                    type="text"
                    value={formDetails.firsName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6}>
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.message.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.succes === false ? "danger" : "succes"}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
