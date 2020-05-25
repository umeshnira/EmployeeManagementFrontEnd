import React from "react";
export const EmployeeSettings = React.lazy(() => import("./EmployeeSettings"));
export const EmployeeProfileView = React.lazy(() =>
  import("./EmployeeProfileView")
);
export const EmployeeRewards = React.lazy(() => import("./EmployeeRewards"));
export const AssignRewards = React.lazy(() => import("./AssignRewards"));
export const ProcessRewards = React.lazy(() => import("./ProcessRewards"));
