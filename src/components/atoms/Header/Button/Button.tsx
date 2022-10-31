import { FC } from "react";
import { Link } from "../../../../interfaces/Header";
import "./Button.scss";

interface ButtonProps {
  buttonColor: string;
  buttonText: string;
  handleButtonClick: (link: Link) => void;
  link: Link;
  
}

export const Button: FC<ButtonProps> = ({ buttonText, buttonColor, handleButtonClick, link }) => {
  return (
    <div onClick={() => handleButtonClick(link)} className="button-container">
      <span style={{ background: `${buttonColor}` }} className="button-container__text">
        {buttonText}
      </span>
    </div>
  );
};
