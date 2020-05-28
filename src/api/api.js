import axios from "axios";

const baseUrl = "http://localhost:63306/api/";

export default {
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
      add: (formData) => axios.post(url + "AddEditWorkingPremise", formData),
    };
  },
};
