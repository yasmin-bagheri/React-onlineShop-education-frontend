import React from "react";

const AddRemoveButton = ({ remove, add, quantity ,classes }) => {
  
  return (
    <div className={`flex items-center justify-between ${classes}`}>
      <button
        onClick={remove}
        className="bg-red-500 text-white px-4 py-2 rounded-md "
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={add}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        +
      </button>
    </div>
  );
};

export default AddRemoveButton;
