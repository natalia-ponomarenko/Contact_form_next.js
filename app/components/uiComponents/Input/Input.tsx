import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type InputProps = {
  type: string;
  placeholder: string;
  error: ReactNode | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ type, placeholder, error, ...props }, forwardedRef) => {
  const errorMessage = typeof error === "string" ? error : null;

  return (
    <>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        ref={forwardedRef}
        className="input"
      />
      {errorMessage && <div className="form__error">{errorMessage}</div>}
    </>
  );
};

export default forwardRef(Input);

Input.displayName = "Input";
