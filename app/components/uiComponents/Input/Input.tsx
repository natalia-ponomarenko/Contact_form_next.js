"use client";
import React, { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  error: string;
};

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ type, placeholder, error, ...props }, forwardedRef) => {
  return (
    <>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        ref={forwardedRef}
        className="input"
      />
      {error && <div className="form__error">{error}</div>}
    </>
  );
};

export default forwardRef(Input);

Input.displayName = "Input";
