/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const handleOnChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={handleOnChange}
        />
      </form>
    </>
  );
};
