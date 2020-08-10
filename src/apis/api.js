import axios from "axios";

const baseUrl = "http://localhost:63306/api/";

export default {
  dbDesignation(url = baseUrl + "Designation/") {
    return {
      GetAllDesignations: () => axios.get(url + "GetAllDesignations"),
      AddEditDesignation: (formData) =>
        axios.post(url + "AddEditDesignation", formData),
      DeleteDesignation: (id) =>
        axios.post(url + `DeleteDesignation?designationId=${id}`),
    };
  },

  dbDepartment(url = baseUrl + "Department/") {
    return {
      GetAllDepartments: () => axios.get(url + "GetAllDepartments"),
      AddEditDepartment: (formData) =>
        axios.post(url + "AddEditDepartment", formData),
      DeleteDepartment: (id) =>
        axios.post(url + `DeleteDepartment?departmentId=${id}`),
    };
  },

  officeLocation(url = baseUrl + "Admin/") {
    return {
      getAllOfficeLocation: () => axios.get(url + "GetOfficeLocationList"),
      addEditOfficeLocation: (formData) =>
        axios.post(url + "AddEditOfficeLocation", formData),
      delOfficeLocation: (delId) =>
        axios.post(url + `DeleteOfficeLocation?officeLocationId=${delId}`),
    };
  },
  workPrimise(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetWorkingPremiseList"),
      addEdit: (formData) =>
        axios.post(url + "AddEditWorkingPremise", formData),
      del: (delId) =>
        axios.post(url + `DeleteWorkingPremise?workingPremiseId=${delId}`),
    };
  },
  rewards(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetAllRewards"),
      addEdit: (formData) => axios.post(url + "AddEditRewards", formData),
      del: (delId) => axios.post(url + `DeleteRewards?RewardId=${delId}`),
    };
  },

  //employee type api's
  dbEmployeeTypes(url = baseUrl + "Admin/") {
    return {
      GetEmployeeTypeList: () => axios.get(url + "GetEmployeeTypeList"),
      GetEmployeeTypeById: (empTypeId) =>
        axios.get(url + `GetEmployeeTypeById?employeeTypeId=${empTypeId}`),
      AddEditEmployeeType: (formData) =>
        axios.post(url + "AddEditEmployeeType", formData),
      DeleteEmployeeType: (delId) =>
        axios.post(url + `DeleteEmployeeType?employeeTypeId=${delId}`),
    };
  },
  // empoloyee api's.
  employee(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetAllEmployees"),
      getSleectedEmployee: (empId) =>
        axios.get(url + `GetAllEmployeeDetailsById?employeeID=${empId}`),
      addEdit: (formData) => axios.post(url + "AddEditEmployees", formData),
      del: (delId) => axios.post(url + `DeleteEmployees?employeeId=${delId}`),
    };
  },

  // items api's.
  items(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetItemsList"),
      addEdit: (itemFormData) => axios.post(url + "AddEditItems", itemFormData),
    };
  },

  // asset api's.
  asset(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetAssetList"),
      // addEdit: (formData) => axios.post(url + "AddEditAsset", formData),
      addEdit: (formData) =>
        axios({
          method: "post",
          url: url + "AddEditAsset",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }),

      del: (delId) => axios.post(url + `DeleteAsset?itemNo=${delId}`),
    };
  },
  //leave type api's
  dbLeaveTypes(url = baseUrl + "Admin/") {
    return {
      GetLeaveTypes: () => axios.get(url + "GetLeaveTypes"),
      AddEditLeaveTypes: (formData) =>
        axios.post(url + "AddEditLeaveTypes", formData),
      DeleteLeaveTypes: (leaveTypeId) =>
        axios.post(url + `DeleteLeaveTypes?LeaveTypeId=${leaveTypeId}`),
    };
  },

  //company policy api's
  dbcompanypolicies(url = baseUrl + "Admin/") {
    return {
      GetCompanyPoliciesList: () => axios.get(url + "GetCompanyPoliciesList"),
      AddEditCompanyPolicies: (formData) =>
        axios.post(url + "AddEditCompanyPolicies", formData),
      DeleteCompanyPolicies: (companyPolicyId) =>
        axios.post(
          url + `DeleteCompanyPolicies?companyPolicyId=${companyPolicyId}`
        ),
    };
  },

  //holiday calendar api's
  dbcalendar(url = baseUrl + "Admin/") {
    return {
      GetHolidayCalendarList: () => axios.get(url + "GetHolidayCalendarList"),
      AddEditHolidayCalendar: (formData) =>
        axios.post(url + "AddEditHolidayCalendar", formData),
      DeleteHolidayCalendar: (year) =>
        axios.post(url + `DeleteHolidayCalendar?year=${year}`),
    };
  },

  // employee educational info
  dbempeducationalinfo(url = baseUrl + "Employee/") {
    return {
      GetEmpEducationalInfo: (employeeId) =>
        axios.get(
          url +
            `GetEmployeeEducationalQualificationByEmployeeId?employeeId=${employeeId}`
        ),
      AddEditEmpEducationalInfo: (formData) => {
        axios.post(url + "AddEditEmployeeEducationalQualification", formData);
      },
      DeleteEmpEducationalInfo: (educationalQualificationId) =>
        axios.post(
          url +
            `DeleteEmployeeEducationalQualificationDetails?educationalQualificationId=${educationalQualificationId}`
        ),
    };
  },

  // Qualification api
  dbqualification(url = baseUrl + "Admin/") {
    return {
      GetQualifications: () => axios.get(url + "GetQualifications"),
    };
  },

  // Work Experience api
  dbworkexperience(url = baseUrl + "Employee/") {
    return {
      GetPreviousProject: (employeeId) =>
        axios.get(
          url + `GetEmployeeWorkExperienceByEmployeeId?employeeId=${employeeId}`
        ),
      GetPreviousProjectDetails: (workExperienceId) =>
        axios.get(
          url +
            `GetEmployeeWorkExperienceById?workExperienceId=${workExperienceId}`
        ),
      AddEditPreviousProjectDetails: (formData) =>
        axios.post(url + "AddEditEmployeeWorkExperience", formData),
      DeletePreviousProject: (workExperienceId) =>
        axios.post(
          url +
            `DeleteEmployeeWorkExperience?workExperienceId=${workExperienceId}`
        ),
    };
  },

  // Previous Company Details api
  dbpreviouscompany(url = baseUrl + "Employee/") {
    return {
      GetEmpPreviousCompanyInfo: (employeeId) =>
        axios.get(
          url +
            `GetAllEmployeePreviousCompanyDetailsByEmployeeId?employeeId=${employeeId}`
        ),
      AddEditPreviousCompanyInfo: (formData) =>
        axios.post(url + "AddEditEmployeePreviousCompanyDetails", formData),
      DeletePreviousCompanyInfo: (employeeCompanyDetailsId) =>
        axios.post(
          url +
            `DeleteEmployeePreviousCompanyDetails?employeeCompanyDetailsId=${employeeCompanyDetailsId}`
        ),
    };
  },

  // skill api.
  skill(url = baseUrl + "Admin/") {
    return {
      getAllSkills: () => axios.get(url + "GetAllSkills"),
    };
  },
  // project api.
  project(url = baseUrl + "Employee/") {
    return {
      getProjectsOfEmployee: (empId) =>
        axios.get(url + `GetProjectDetailByEmployee?EmployeeId=${empId}`),
      addProject: (formData) =>
        axios.post(url + "AddEmployeeProjects", formData),
      editProject: (formData) =>
        axios.post(url + "EditEmployeeProjects", formData),
      delProject: (delId) =>
        axios.post(url + `DeleteProject?ProjectId=${delId}`),
    };
  },

  // task api.
  task(url = baseUrl + "Employee/") {
    return {
      getProjectDetailsOfEmp: (employeeId) =>
        axios.get(url + `GetProjectDetailByEmployee?EmployeeId=35`),
    };
  },
};
