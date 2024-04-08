export default function ReusableInput({
  id = "",
  placeholder = "",
  value,
  required = false,
  onChange = () => {},
  labelText = "",
  customizeStyle = "",
  textarea = false,
  rows = 5,
}) {
  return (
    <>
      <label htmlFor={id} style={{ display: "block" }}>
        {labelText}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          rows={rows}
          required={required ? "required" : ""}
        ></textarea>
      ) : (
        <input
          value={value}
          onChange={onChange}
          id={id}
          placeholder={placeholder}
          required={required ? "required" : ""}
        />
      )}
    </>
  );
}
