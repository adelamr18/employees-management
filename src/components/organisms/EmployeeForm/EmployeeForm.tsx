import { Alert } from "@mui/material";
import { FC, useState } from "react";

import { FORM_HEADER, FIRSTNAME, LASTNAME } from "../../../shared/constants/EmployeeForm";
import { RED_BUTTON_COLOR, LINKS } from "../../../shared/constants/Header";
import { Button } from "../../atoms/Header/Button/Button";
import Basic from "./Basic";
import "./EmployeeForm.scss";
import { useFormik } from "formik";

export const EmployeeForm: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(0);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const handleButtonClick = () => {};

  return (
    <div className="form-wrapper">
      <h3>{FORM_HEADER}</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-wrapper__control">
          <label>{FIRSTNAME}</label>
          <input value={formik.values.firstName} onChange={formik.handleChange} name="firstName" required type="text" />
        </div>
        <div className="form-wrapper__control">
          <label>{LASTNAME}</label>
          <input value={formik.values.lastName} onChange={formik.handleChange} name="lastName" required type="text" />
        </div>
        <button type="submit"> Test</button>
        <div className="form-wrapper__submit">
          <Button handleButtonClick={handleButtonClick} buttonColor={RED_BUTTON_COLOR} buttonText={FORM_HEADER} link={LINKS[0]} />
        </div>
      </form>
    </div>
  );
};
