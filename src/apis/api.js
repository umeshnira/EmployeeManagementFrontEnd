import axios from "axios";

const baseUrl = "http://localhost:63306/api/";

export default {
  dbDesignation(url = baseUrl + "Designation/") {
    return {
      GetAllDesignations: () => axios.get(url + "GetAllDesignations"),
      DeleteDesignation: (id) =>
        axios.post(url + `DeleteDesignation?designationId=${id}`),
    };
  },

  dbDepartment(url = baseUrl + "Department/") {
    return {
      GetAllDepartments: () => axios.get(url + "GetAllDepartments"),
      DeleteDesignation: (id) =>
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
  // asset api's.
  asset(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetAssetList"),
      addEdit: (formData) => axios.post(url + "AddEditAsset", formData),
      del: (delId) => axios.post(url + `DeleteAsset?itemNo=${delId}`),
    };
  },
  // items api's.
  items(url = baseUrl + "Admin/") {
    return {
      getAll: () => axios.get(url + "GetItemsList"),
    };
  },
  //employee type api's
  dbEmployeeTypes(url = baseUrl + "Admin/") {
    return {
      GetEmployeeTypeList: () => axios.get(url + "GetEmployeeTypeList"),
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
};
