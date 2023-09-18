const FormInput = ({ label, name, type, defaultValue, onChange }) => {
  return (
    <>
      <div className='form-input'>
        <label>
          {label} <br />
        </label>
        <input
          onChange={onChange}
          type={type}
          name={name}
          defaultValue={defaultValue}
          placeholder=''
          required
        />
      </div>
    </>
  );
};

export default FormInput;
