import { FC } from "react";

import { EmployeeForm } from "../../organisms/EmployeeForm/EmployeeForm";
import './AddEmployee.scss';

export const AddEmployee: FC = () => {
  return (
    <div className="add-employee-wrapper">
      <EmployeeForm />
    </div>
  );
};
