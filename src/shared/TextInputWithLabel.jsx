function TextInputWithLabel({
  labelText,
  elementId,
  onChange,
  value,
  inputref,
}) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>

      <input
        type="text"
        id={elementId}
        value={value}
        onChange={onChange}
        ref={inputref}
      />
    </>
  );
}

export default TextInputWithLabel;
