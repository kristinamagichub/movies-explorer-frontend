import "@/components/Form/Form.css";

export function Input({
  name,
  type,
  placeholder,
  minLength,
  label,
  onChange,
  validity,
  value,
}) {
  return (
    <label className="form__label">
      {label}
      <input
        className="form__input"
        name={name}
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        minLength={minLength}
      />

      {!validity.isValid && (
        <span className="form__input-error">{validity.message}</span>
      )}
    </label>
  );
}
