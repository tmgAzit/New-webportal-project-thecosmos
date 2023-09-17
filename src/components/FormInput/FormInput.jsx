const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <>
      <div className='form-input'>
        <label>
          {label} <br />
        </label>
        <input
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
