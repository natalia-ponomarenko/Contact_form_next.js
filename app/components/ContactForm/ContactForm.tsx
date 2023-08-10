"use client";
import "./ContactForm.scss";
import { poppins } from "../../layout";
import { useState } from "react";
import CustomCheckbox from "../CustomCheckbox";
import Image from "next/image";

const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>,
    setValue: (value: string) => void
  ) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className="form">
      <form action="">
        <div className="form__inputs">
          <div className="form__group">
            <div className="form__input-wrapper">
              <label
                htmlFor="name"
                className={`${
                  inputFocused || nameValue ? "form__input-active" : ""
                } form__input-label`}
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John"
                className={poppins.className}
                value={nameValue}
                onBlur={handleBlur}
                onChange={(e) => handleInputChange(e, setNameValue)}
              />
            </div>
            <div className="form__input-wrapper">
              <label
                htmlFor="last_name"
                className={`${
                  inputFocused || lastnameValue ? "form__input-active" : ""
                } form__input-label`}
              >
                Last Name
              </label>
              <input
                type="email"
                id="last_name"
                name="last_name"
                placeholder="Doe"
                className={poppins.className}
                value={lastnameValue}
                onBlur={handleBlur}
                onChange={(e) => handleInputChange(e, setLastnameValue)}
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__input-wrapper">
              <label
                htmlFor="email"
                className={`${
                  inputFocused || emailValue ? "form__input-active" : ""
                } form__input-label`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className={poppins.className}
                value={emailValue}
                onBlur={handleBlur}
                onChange={(e) => handleInputChange(e, setEmailValue)}
              />
            </div>
            <div className="form__input-wrapper">
              <label
                htmlFor="phone"
                className={`${
                  inputFocused || phoneValue ? "form__input-active" : ""
                } form__input-label`}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+380..."
                className={poppins.className}
                value={phoneValue}
                onBlur={handleBlur}
                onChange={(e) => handleInputChange(e, setPhoneValue)}
              />
            </div>
          </div>
        </div>
        <h3>Select Subject?</h3>
        <div className="form__checkboxes">
          <div className="form__checkboxes-group">
            <CustomCheckbox label="General Inquiry" />
            <CustomCheckbox label="General Inquiry" />
          </div>
          <div className="form__checkboxes-group">
            <CustomCheckbox label="General Inquiry" />
            <CustomCheckbox label="General Inquiry" />
          </div>
        </div>
        <div className="form__group message">
          <div className="form__input-wrapper message">
            <label
              htmlFor="message"
              className={`${
                inputFocused || messageValue ? "form__input-active" : ""
              } form__input-label`}
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Write your message.."
              className={poppins.className}
              value={messageValue}
              onBlur={handleBlur}
              onChange={(e) => handleInputChange(e, setMessageValue)}
            />
          </div>
        </div>
        <div className="form__button-wrapper">
          <button
            type="submit"
            className={`form__submit-button ${poppins.className}`}
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="form__image-wrapper">
        <Image
          src="/images/letter_send.svg"
          fill
          alt="flying paper plane"
          className="form__image"
        />
      </div>
    </div>
  );
};

export default ContactForm;
