// -----------Employee List-------------------------
const empList = [
  {
    value: {
      empId: 29,
      empType: "",
      empName: "Waston",
      doj: "2020-04-01",
      dob: "1995-09-28",
      adharNo: "7877-1212-3343-2121",
      panNo: "ijw77818sw",
      esiNo: "esi10101",
      epfUan: "none",
      qualification: "PHD",
      designation: "Associate Software Engineer",
      gaurdianName: "Vasudevan",
      address: "Vyshagam (H)",
      mobileNo: "8129340696",
      alternativeNo: "9605455550",
      niraMailId: "vimalm@nirasystms.com",
      alternativeMailId: "vimalvyshagam@gmail.com",
      ifscCode: "fdrl0001577",
      bankAccNo: "15770100065383",
      bloodGroup: "B-",
      department: "software Development",
      skill: "Reactjs, Nodejs, Php",
      officeLocation: "thrisur",
      workPrimise: "home",
      profileImg: "avatar-01.jpg",
      salary: 60000,
      salaryDate: new Date("2-28-2019"),
      totalPlAmountDebited: 1100,
      totalPlAmountEncashed: 7100,
    },
    label: "Waston",
  },
  {
    value: {
      empId: 13,
      empType: "",
      empName: "Dutch",
      doj: "2020-04-01",
      dob: "1995-09-28",
      adharNo: "7877-1212-3343-2121",
      panNo: "ijw77818sw",
      esiNo: "esi10101",
      epfUan: "none",
      qualification: "PHD",
      designation: "Associate Software Engineer",
      gaurdianName: "Vasudevan",
      address: "Vyshagam (H)",
      mobileNo: "8129340696",
      alternativeNo: "9605455550",
      niraMailId: "vimalm@nirasystms.com",
      alternativeMailId: "vimalvyshagam@gmail.com",
      ifscCode: "fdrl0001577",
      bankAccNo: "15770100065383",
      bloodGroup: "B-",
      department: "software Development",
      skill: "Reactjs, Nodejs, Php",
      officeLocation: "kozhikode",
      workPrimise: "home",
      profileImg: "nible.png",
      salary: 60000,
      salaryDate: new Date("7-28-2019"),
      totalPlAmountDebited: 2100,
      totalPlAmountEncashed: 6100,
    },
    label: "Dutch",
  },
  {
    value: {
      empId: 33,
      empType: "",
      empName: "Jerry",
      doj: "2020-04-01",
      dob: "1995-09-28",
      adharNo: "7877-1212-3343-2121",
      panNo: "ijw77818sw",
      esiNo: "esi10101",
      epfUan: "none",
      qualification: "PHD",
      designation: "Associate Software Engineer",
      gaurdianName: "Vasudevan",
      address: "Vyshagam (H)",
      mobileNo: "8129340696",
      alternativeNo: "9605455550",
      niraMailId: "vimalm@nirasystms.com",
      alternativeMailId: "vimalvyshagam@gmail.com",
      ifscCode: "fdrl0001577",
      bankAccNo: "15770100065383",
      bloodGroup: "B-",
      department: "software Development",
      skill: "Reactjs, Nodejs, Php",
      officeLocation: "kochi",
      workPrimise: "home",
      profileImg: "avatar-06.png",
      salary: 60000,
      salaryDate: new Date("8-28-2019"),
      totalPlAmountDebited: 3000,
      totalPlAmountEncashed: 5600,
    },
    label: "Jerry",
  },
  {
    value: {
      empId: 100,
      empType: "",
      empName: "Tom",
      doj: "2020-04-01",
      dob: "1995-09-28",
      adharNo: "7877-1212-3343-2121",
      panNo: "ijw77818sw",
      esiNo: "esi10101",
      epfUan: "none",
      qualification: "PHD",
      designation: "Associate Software Engineer",
      gaurdianName: "Vasudevan",
      address: "Vyshagam (H)",
      mobileNo: "8129340696",
      alternativeNo: "9605455550",
      niraMailId: "vimalm@nirasystms.com",
      alternativeMailId: "vimalvyshagam@gmail.com",
      ifscCode: "fdrl0001577",
      bankAccNo: "15770100065383",
      bloodGroup: "B-",
      department: "software Development",
      skill: "Reactjs, Nodejs, Php",
      officeLocation: "kannur",
      workPrimise: "home",
      profileImg: "avatar-07.jpg",
      salary: 60000,
      salaryDate: new Date("6-28-2019"),
      totalPlAmountDebited: 2200,
      totalPlAmountEncashed: 9000,
    },
    label: "Tom",
  },
  {
    value: {
      empId: 66,
      empType: "",
      empName: "Spike",
      doj: "2020-04-01",
      dob: "1995-09-28",
      adharNo: "7877-1212-3343-2121",
      panNo: "ijw77818sw",
      esiNo: "esi10101",
      epfUan: "none",
      qualification: "PHD",
      designation: "Associate Software Engineer",
      gaurdianName: "Vasudevan",
      address: "Vyshagam (H)",
      mobileNo: "8129340696",
      alternativeNo: "9605455550",
      niraMailId: "vimalm@nirasystms.com",
      alternativeMailId: "vimalvyshagam@gmail.com",
      ifscCode: "fdrl0001577",
      bankAccNo: "15770100065383",
      bloodGroup: "B-",
      department: "software Development",
      skill: "Reactjs, Nodejs, Php",
      officeLocation: "kannur",
      workPrimise: "home",
      profileImg: "avatar-05.jpeg",
      salary: 60000,
      salaryDate: new Date("9-28-2019"),
      totalPlAmountDebited: 1700,
      totalPlAmountEncashed: 6100,
    },
    label: "Spike",
  },
];

// ---------------Certificates ---------------------
export const empCertificates = [
  {
    empId: "29",
    certificate: [
      { certificateName: "React master in Redux", date: "2002-02-09" },
      { certificateName: "Dot net core V3", date: "2002-02-09" },
      { certificateName: "RxJs", date: "2002-02-09" },
      { certificateName: "Angular", date: "2002-02-09" },
    ],
  },
  {
    empId: "13",
    certificate: [
      { certificateName: "React master in Redux", date: "2002-02-09" },
      { certificateName: "RxJs", date: "2002-02-09" },
    ],
  },
  {
    empId: "33",
    certificate: [
      { certificateName: "React master in Redux", date: "2002-02-09" },
      { certificateName: "RxJs", date: "2002-02-09" },
    ],
  },
  {
    empId: "66",
    certificate: [
      { certificateName: "React master in Redux", date: "2002-02-09" },
      { certificateName: "RxJs", date: "2002-02-09" },
    ],
  },
];

// ------------------ Skill ----------------------
export const empSkills = [
  {
    empId: "31",
    skill: [
      {
        skillId: 1,
        skillCategory: "technologies",
        skillName: [".NET TECHNOLOGIES", "MERN", "MEAN", "Odoo"],
      },
      {
        skillId: 2,
        skillCategory: "web based language",
        skillName: ["ASP.NET", "APS.NET MVC", "Angular 5", "jQuery"],
      },
      {
        skillId: 3,
        skillCategory: "desktop based language",
        skillName: ["C#.NET", "VB.NET", "Scala", "Spark"],
      },
    ],
  },
];

export const employeeDashboard = {
  employee: empList[0],
  todoList: [
    {
      id: 1,
      content: "design login for employee",
    },
    {
      id: 2,
      content: "check all API's",
    },
    {
      id: 3,
      content: "commite code",
    },
  ],
  pendingTask: [
    {
      id: 1,
      content: "performance appraisal",
    },
    {
      id: 2,
      content: "Daily status sheet API",
    },
  ],
  tickets: [
    {
      referenceId: 1,
      type: "employee",
      assignedDesk: "HR",
      summary: "please open daily status sheet of 20th may.",
      status: "open",
    },
    {
      referenceId: 2,
      type: "offical",
      assignedDesk: "maintenance",
      summary: "need to change air filter of AC ventilation",
      status: "closed",
    },
  ],
};

export { empList };
