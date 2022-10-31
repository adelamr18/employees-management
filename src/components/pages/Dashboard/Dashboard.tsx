import { FC } from "react";

import { LINKS, RED_BUTTON_COLOR } from "../../../shared/constants/Header";
import { IMAGES } from "../../../shared/constants/Images";
import "./Dashboard.scss";
import { DASHBOARD_SUBTITLE, DASHBOARD_TITLE } from "../../../shared/constants/Dashboard";
import { Button } from "../../atoms/Header/Button/Button";
import { Link } from "../../../interfaces/Header";
import { useNavigate } from "react-router-dom";

export const Dashboard: FC = () => {
  const navigate = useNavigate();
  const handleButtonClick = (link: Link) => {
    navigate(link.route);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-wrapper__main">
        <div className="dashboard-wrapper__subinfo">
          <h1>{DASHBOARD_TITLE}</h1>
          <h3>{DASHBOARD_SUBTITLE}</h3>
          <div className="dashboard-wrapper__subinfo-actions">
            {LINKS.map((item: Link, index: number) => (
              <Button key={index} handleButtonClick={handleButtonClick} buttonColor={RED_BUTTON_COLOR} buttonText={item.title} link={item} />
            ))}
          </div>
        </div>
        <div className="dashboard-wrapper__image">
          <img alt="dashboard-logo" src={IMAGES.DASHBOARD} />
        </div>
      </div>
    </div>
  );
};
