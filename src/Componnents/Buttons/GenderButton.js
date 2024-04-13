import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGender } from "../../ReduxStore/userSlice";

const GenderButton = ({ showButton }) => {
  const gender = useSelector((state) => state.user.gender);
  const dispatch = useDispatch();

  const handleGenderSelection = (selectedGender) => {
    dispatch(addGender(selectedGender));
  };

  return (
    <>
      {showButton && (
        <div className="flex border border-black rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl">
          <button
            className={`gender-button ${
              gender === "male" ? "bg-black text-white" : ""
            } px-2 py-1 rounded-tl-2xl rounded-bl-2xl`}
            onClick={() => handleGenderSelection("male")}
          >
            Men
          </button>
          <button
            className={`gender-button ${
              gender === "female" ? "bg-black text-white" : ""
            } px-2 py-1 rounded-tr-2xl rounded-br-2xl`}
            onClick={() => handleGenderSelection("female")}
          >
            Women
          </button>
        </div>
      )}
    </>
  );
};

export default GenderButton;
