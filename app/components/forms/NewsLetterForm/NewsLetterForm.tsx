"use client";
import { useForm } from "react-hook-form";
import { manrope, poppins } from "../../../../utilities/fonts";
import "./NewsLetterForm.scss";
import { emailPattern } from "../../../../utilities/constants";
import { useState, useEffect } from "react";

type FormValues = {
  email: string;
};

const NewsLetterForm = () => {
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
    reset();
    setMessageSuccess(true);
  };

  return (
    <>
      <h3 className="join-us__header">Join our newsletter</h3>
      <div className="join-us__input-wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("email", {
              required: "Fill in your email",
              pattern: {
                value: emailPattern,
                message: "Invalid email address",
              },
            })}
            placeholder="Your email address"
            className={poppins.className}
          />
          <button type="submit">Subscribe</button>
        </form>
        <small className="join-us__message">{errors.email?.message}</small>
        {messageSuccess && (
          <small className="join-us__success-message">Success</small>
        )}
      </div>
      <p className={`${manrope.className} join-us__extra`}>
        * Will send you weekly updates for your better tool management.
      </p>
    </>
  );
};

export default NewsLetterForm;
