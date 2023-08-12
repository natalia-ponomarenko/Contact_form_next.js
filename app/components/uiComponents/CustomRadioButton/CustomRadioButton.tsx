import { UseFormRegister } from "react-hook-form";
import "./CustomRadioButton.scss";
import { MyFormValues } from "../../forms/ContactForm";

type Props = {
  label: string;
  value: string;
  register: UseFormRegister<MyFormValues>;
}

const CustomRadioButton: React.FC<Props> = ({ label, value, register }) => {
  return (
    <div className="radio">
      <input
        {...register("subject", { required: true })}
        type="radio"
        name="subject"
        value={value}
        className="radio__input"
        id={value}
      />
      <label
        htmlFor={value}
        className="radio__label"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
