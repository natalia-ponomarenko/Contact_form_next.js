type Props = {
  htmlFor: string;
  labelText: string;
  isActive: string | boolean;
};

const InputLabel: React.FC<Props> = ({ htmlFor, labelText, isActive }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${isActive ? "form__input-active" : ""} form__input-label`}
    >
      {labelText}
    </label>
  );
};

export default InputLabel;
