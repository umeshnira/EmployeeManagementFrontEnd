// import React from "react";

// const EmployeeCard = React.lazy(() => import("./EmployeeCard"));
// const EmployeeAddForm = React.lazy(() => import("./EmployeeAddForm"));

// export { EmployeeCard, EmployeeAddForm };
// employee settings.
export { default as EmployeeCard } from "./employeeSettings/EmployeeCard";
export { default as EmployeeAddEditForm } from "./employeeSettings/EmployeeAddEditForm";
export { default as EmployeeToRow } from "./employeeSettings/EmployeeToRow";
export { default as useEmpTableEle } from "./employeeSettings/useEmpTableEle"; //hook

// employee profile.
export { default as EmpProfileViewTopCard } from "./employeeProfileView/EmpProfileViewTopCard";
export { default as EmpProfileViewTabs } from "./employeeProfileView/EmpProfileViewTabs";
