import React, { useState } from "react";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    contact_fName: "",
    contact_lName: "",
    contact_email: "",
    contact_subject: "",
    contact_message: "",
  });

  const onChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact_us">
      <h2>Contact Us</h2>
      <div className="contact_details">
        <div className="row">
          <div className="col-8 mt-4">
            <p>
              You can use this contact form to send us feedback about
              FileInstant website. We are waiting for your thoughts or
              suggestions. We will try to respond to all messages you send us as
              long as they contain well-founded feedback or suggestions. We will
              not consider/answer questions related to fixing your computer,
              finding information on the Internet, or anything similar. Please
              note that we are receiving lots of emails so it could take us 48
              hours or more to answer your email.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <form className="mt-4">
              <div className="row mb-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contact_fName">First name:</label>
                    <input
                      type="text"
                      name="contact_fName"
                      id="contact_fName"
                      className="form-control mt-1"
                      placeholder="Enter your first name here..."
                      onChange={onChange}
                      value={contactDetails.contact_fName}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contact_lName">Last name:</label>
                    <input
                      type="text"
                      name="contact_lName"
                      id="contact_lName"
                      className="form-control mt-1"
                      placeholder="Enter your last name here..."
                      onChange={onChange}
                      value={contactDetails.contact_lName}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contact_subject">Email:</label>
                    <input
                      type="email"
                      name="contact_email"
                      id="contact_email"
                      className="form-control mt-1"
                      placeholder="Enter your email here..."
                      onChange={onChange}
                      value={contactDetails.contact_email}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contact_subject">Subject:</label>
                    <input
                      type="text"
                      name="contact_subject"
                      id="contact_subject"
                      className="form-control mt-1"
                      placeholder="Enter your subject here..."
                      onChange={onChange}
                      value={contactDetails.contact_subject}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="contact_message">Message:</label>
                    <textarea
                      type="text"
                      name="contact_message"
                      id="contact_message"
                      className="form-control mt-1"
                      placeholder="Enter your message here..."
                      onChange={onChange}
                      value={contactDetails.contact_message}
                      style={{ minHeight: "200px" }}
                      required
                      minLength="32"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <input
                      type="submit"
                      name="contact_submit"
                      id="contact_submit"
                      className="btn btn-primary mt-3"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-5">
            <div className="d-flex align-items-center h-100">
              <img
                src="./contact.svg"
                className="img-fluid"
                alt=""
                style={{
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
