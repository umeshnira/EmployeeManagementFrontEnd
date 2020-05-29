 import axios from "axios";

const baseUrl = "http://localhost:63306/api/";

export default {

  dbDesignation(url = baseUrl + "Designation/"){
    return {
        GetAllDesignations : () => axios.get(url+"GetAllDesignations"),
        DeleteDesignation : id => axios.post(url+`DeleteDesignation?designationId=${id}`)
    }   
    }, 
    
    dbDepartment(url = baseUrl + "Department/"){
        return {
            GetAllDepartments : () => axios.get(url+"GetAllDepartments"),
            DeleteDesignation : id => axios.post(url+`DeleteDepartment?departmentId=${id}`)
        }
       
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
};
