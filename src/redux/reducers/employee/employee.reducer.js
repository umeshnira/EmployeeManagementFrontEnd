import {
  GET_EMP_LIST_SUCCESS,
  ADD_EMP_SUCCESS,
  GET_SELECT_EMP_SUCCESS,
  DEL_EMP_CERTIFICATE_SUCCESS,
  ADD_EMP_SKILL_SUCCESS,
  DEL_EMP_SUCCESS,
  UPDATE_EMP_SUCCESS,
  GET_EMP_EUCATIONAL_INFO_SUCCESS,
  ADD_EMP_EUCATIONAL_INFO_SUCCESS,
  GET_EMP_QUALIFICATION_SUCCESS,
  UPDATE_EMP_EUCATIONAL_INFO_SUCCESS,
  DELETE_EMP_EUCATIONAL_INFO_SUCCESS,
  GET_EMP_PREVIOUS_COMPANY_DETAILS_SUCCESS,
  ADD_PREVIOUS_COMPANY_DETAILS_SUCCESS,
  UPDATE_PREVIOUS_COMPANY_DETAILS_SUCCESS,
  DELETE_PREVIOUS_COMPANY_DETAILS_SUCCESS,
  GET_EMP_WORKEXPERIENCE_SUCCESS,
  GET_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS,
  ADD_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS,
  UPDATE_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS,
  DELETE_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS,
} from "../../actions/actionType";

const initialState = {
  empList: [],
  selectEmp: [],
  empCertificate: [],
  empSkill: [],
  empeducationalInfo: [],
  qualification: [],
  empworkexp: [],
  prevcompanyinfo: [],
  prevprojects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMP_LIST_SUCCESS:
      return {
        ...state,
        empList: action.payload,
      };
    case ADD_EMP_SUCCESS:
      return {
        ...state,
        empList: [
          ...state.empList,
          { value: action.payload, label: action.payload.employeeName },
        ],
      };
    case UPDATE_EMP_SUCCESS:
      return {
        ...state,
        key: console.log(action.payload),
        empList: state.empList.map((emp) =>
          emp.value.employeeId === action.payload.employeeId
            ? { value: action.payload, label: action.payload.employeeName }
            : emp
        ),
      };
    case DEL_EMP_SUCCESS:
      return {
        ...state,
        empList: state.empList.filter(
          (emp) => emp.value.employeeId !== action.payload
        ),
      };
    case GET_SELECT_EMP_SUCCESS:
      return {
        ...state,
        selectEmp: action.profileInfo, //we get as arr sot take the 1st ele. Ref data/employee
        // empCertificate: action.empCertificate[0].certificate, //we get emp id and certificate take only certificate.  Ref data/employee
        // empSkill: action.empSkill[0].skill, // we get emp id and skill as key value pair so take only skill key.  Ref data/employee
      };
    case DEL_EMP_CERTIFICATE_SUCCESS:
      return {
        ...state,
        empCertificate: state.empCertificate.filter(
          (ele) => ele.certificateName !== action.delId
        ),
      };
    case ADD_EMP_SKILL_SUCCESS:
      return {
        ...state,
        // key: state.empSkill.filter((el) => {
        //   if (el.skillId === action.skillId) {
        //     return el.skillName.push(action.empNewSkill);
        //   }
        // }),
        empSkill: action.newEmpSkillList,
      };

    //------Employee educational Information
    case GET_EMP_EUCATIONAL_INFO_SUCCESS:
      return {
        ...state,
        empeducationalInfo: action.payload,
      };
    case ADD_EMP_EUCATIONAL_INFO_SUCCESS:
      return {
        ...state,
        empeducationalInfo: [...state.empeducationalInfo, action.payload],
      };
    case UPDATE_EMP_EUCATIONAL_INFO_SUCCESS:
      return {
        ...state,
        empeducationalInfo: state.empeducationalInfo.filter((el, i) =>
          i === action.payload.educationalQualificationId
            ? action.payload.val
            : el
        ),
      };
    case DELETE_EMP_EUCATIONAL_INFO_SUCCESS:
      return {
        ...state,
        empeducationalInfo: state.empeducationalInfo.filter(
          (el) => el.educationalQualificationId !== action.payload
        ),
      };
    //----Qualification
    case GET_EMP_QUALIFICATION_SUCCESS:
      return {
        ...state,
        qualification: action.payload,
      };

    //----Previous Company Details
    case GET_EMP_PREVIOUS_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        // prevcompanyinfo: action.payload,
        prevcompanyinfo: [],
      };

    case ADD_PREVIOUS_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        prevcompanyinfo: [...state.prevcompanyinfo, action.payload],
      };
    case UPDATE_PREVIOUS_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        prevcompanyinfo: state.prevcompanyinfo.filter((el, i) =>
          i === action.payload.employeeCompanyDetailsId
            ? action.payload.val
            : el
        ),
      };
    case DELETE_PREVIOUS_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        prevcompanyinfo: state.prevcompanyinfo.filter(
          (el) => el.employeeCompanyDetailsId !== action.payload
        ),
      };

    //--------------Work Experience
    case GET_EMP_WORKEXPERIENCE_SUCCESS:
      return {
        ...state,
         empworkexp: action.payload,
      };

    //--------------Previous Project Details
    case GET_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        prevprojects: action.payload,
      };
    case ADD_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS:
        return {
          ...state,
          empworkexp: [...state.empworkexp, action.payload],
        };
    case UPDATE_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS:
        return {
          ...state,
          empworkexp: state.empworkexp.map((el, i) =>
          el.workExperienceId === action.payload.workExperienceId
            ? action.payload
            : el),
        };  
    case DELETE_EMP_PREVIOUS_PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        empworkexp: state.empworkexp.filter(
          (el) => el.workExperienceId !== action.payload
        ),
      };

    default:
      return state;
  }
}
