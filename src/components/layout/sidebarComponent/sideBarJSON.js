export const adminSideBar = {
  dashboard: {
    menuName: "Dashboard",
    menuIcon: "fab fa-product-hunt",
    route: "/adminDashboard",
  },
  adminSettings: {
    menuName: "Admin Settings",
    menuIcon: "fas fa-briefcase",
    route: "/companylocation",
  },
  project: {
    menuName: "Project Board",
    menuIcon: "fab fa-product-hunt",
    subMenu: [
      {
        subMenuName: "Project List",
        icon: "fas fab fa-product-hunt",
        route: "/listProjects",
      },
      {
        subMenuName: "Back Logs",
        icon: "fas fab fa-product-hunt",
        route: "/taskManagment",
      },
      {
        subMenuName: "Task Board",
        icon: "fas fab fa-product-hunt",
        route: "/taskBoard/54",
      },
    ],
  },
  employeeSettings: {
    menuName: "Employee Settings",
    menuIcon: "fas fa-user-tie",
    subMenu: [
      {
        subMenuName: "All Employee",
        icon: "fas fab fa-product-hunt",
        route: "/emplist",
      },
      {
        subMenuName: "Assign Rewards",
        icon: "fas fab fa-product-hunt",
        route: "/assignRewards",
      },
      {
        subMenuName: "Process Rewards",
        icon: "fas fab fa-product-hunt",
        route: "/processRewards",
      },
    ],
  },
  payRoll: {
    menuName: "Pay Roll",
    menuIcon: "fas fa-user-tie",
    subMenu: [
      {
        subMenuName: "Pay Roll Items",
        icon: "fas fab fa-product-hunt",
        route: "/payRollItems",
      },
      {
        subMenuName: "Employee salary",
        icon: "fas fab fa-product-hunt",
        route: "/employeeSalary",
      },
      {
        subMenuName: "Process Salary",
        icon: "fas fab fa-product-hunt",
        route: "/processSalary",
      },
      {
        subMenuName: "Salary Report",
        icon: "fas fab fa-product-hunt",
        route: "/salaryReport",
      },
      {
        subMenuName: "Privlage Leave",
        icon: "fas fab fa-product-hunt",
        route: "/plReport",
      },
    ],
  },
  finance: {
    menuName: "Finance",
    menuIcon: "fas fa-user-tie",
    subMenu: [
      {
        subMenuName: "Petty Cash",
        icon: "fas fab fa-product-hunt",
        route: "/pettyCash",
      },
      {
        subMenuName: "Gift Voucher",
        icon: "fas fab fa-product-hunt",
        route: "/giftVoucher",
      },
      {
        subMenuName: "Invoice",
        icon: "fas fab fa-product-hunt",
        route: "/invoice",
      },
    ],
  },
};
