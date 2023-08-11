"use client";
import "./ContactForm.scss";
import { poppins } from "../../../../utilities/fonts";
import { useEffect, useState } from "react";
import CustomCheckbox from "../../uiComponents/CustomCheckbox/CustomCheckbox";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Input from "../../uiComponents/Input/Input";
import InputLabel from "../../uiComponents/InputLabel/InputLabel";
import { emailPattern, phonePattern } from "../../../../utilities/constants";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  useEffect(() => {
    if (messageSuccess) {
      setTimeout(() => {
        setMessageSuccess(false);
      }, 3000);
    }
  }, [messageSuccess]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setMessageSuccess(true);
    reset();
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__inputs">
          <div className="form__group">
            <div className="form__input-wrapper">
              <InputLabel
                htmlFor="name"
                labelText="First Name"
                isActive={inputFocused || nameValue}
              />
              <Input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  onChange: (e) => handleInputChange(e, setNameValue),
                  onBlur: handleBlur,
                })}
                placeholder="John"
                error={errors.name?.message}
              />
            </div>
            <div className="form__input-wrapper">
              <InputLabel
                htmlFor="lastName"
                labelText="Last Name"
                isActive={inputFocused || lastnameValue}
              />
              <Input
                type="text"
                {...register("lastName", {
                  required: "Lastname is required",
                  onChange: (e) => handleInputChange(e, setLastnameValue),
                  onBlur: handleBlur,
                })}
                placeholder="Doe"
                error={errors.lastName?.message}
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__input-wrapper">
              <InputLabel
                htmlFor="email"
                labelText="Email"
                isActive={inputFocused || emailValue}
              />
              <Input
                type="text"
                {...register("email", {
                  required: "Email is required",
                  onChange: (e) => handleInputChange(e, setEmailValue),
                  onBlur: handleBlur,
                  pattern: {
                    value: emailPattern,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
                error={errors.email?.message}
              />
            </div>
            <div className="form__input-wrapper">
              <InputLabel
                htmlFor="name"
                labelText="Phone Number"
                isActive={inputFocused || phoneValue}
              />
              <Input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  onChange: (e) => handleInputChange(e, setPhoneValue),
                  onBlur: handleBlur,
                  pattern: {
                    value: phonePattern,
                    message: "Invalid phone format",
                  },
                })}
                placeholder="+380.."
                error={errors.phone?.message}
              />
            </div>
          </div>
        </div>
        <h3>Select Subject?</h3>
        <div className="form__checkboxes">
          <div className="form__checkboxes-group">
            <CustomCheckbox
              label="General Inquiry"
              name="checkbox1"
            />
            <CustomCheckbox
              label="General Inquiry"
              name="checkbox2"
            />
          </div>
          <div className="form__checkboxes-group">
            <CustomCheckbox
              label="General Inquiry"
              name="checkbox3"
            />
            <CustomCheckbox
              label="General Inquiry"
              name="checkbox4"
            />
          </div>
        </div>
        <div className="form__group message">
          <div className="form__input-wrapper message">
            <InputLabel
              htmlFor="name"
              labelText="Message"
              isActive={inputFocused || messageValue}
            />
            <Input
              type="text"
              {...register("message", {
                required: "Message is required",
                onChange: (e) => handleInputChange(e, setMessageValue),
                onBlur: handleBlur,
              })}
              placeholder="Write your message..."
              error={errors.message?.message}
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
      {messageSuccess && (
        <div className="form__message">Successfully submitted!</div>
      )}
      <div className="form__image-wrapper">
        <Image
          priority={true}
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
