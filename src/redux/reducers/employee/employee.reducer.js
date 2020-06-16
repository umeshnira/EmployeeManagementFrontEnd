import {
  GET_EMP_LIST_SUCCESS,
  ADD_EMP_SUCCESS,
  GET_SELECT_EMP_SUCCESS,
  DEL_EMP_CERTIFICATE_SUCCESS,
  ADD_EMP_SKILL_SUCCESS,
  DEL_EMP_SUCCESS,
  UPDATE_EMP_SUCCESS,
} from "../../actions/actionType";

const initialState = {
  empList: [],
  selectEmp: [],
  empCertificate: [],
  empSkill: [],
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
    default:
      return state;
  }
}
