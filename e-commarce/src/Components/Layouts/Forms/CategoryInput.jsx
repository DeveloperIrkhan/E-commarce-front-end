import React from "react";
const CategoryInput = ({
  placeholder,
  handleSubmitfun,
  value,
  setValue,
  InputButtonText,
}) => {
  return (
    <>
      <form onSubmit={handleSubmitfun}>
        <div className="m-3 border p-3 rounded-2">
          <input
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="my-3 btn btn-primary" type='submit'>
            {InputButtonText}
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryInput;
