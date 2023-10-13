const FormInput = ({ label, name, type, value, onChange }) => {
  return (
    <>
      <div className='form-input'>
        <label>
          {label} <br />
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </>
  );
};

export default FormInput;
