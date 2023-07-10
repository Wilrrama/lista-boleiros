export const Input = ({
  label,
  id,
  type = "text",
  setValue,
  value,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
    </>
  );
};
