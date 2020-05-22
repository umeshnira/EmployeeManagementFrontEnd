import {
  GET_EMP_TASK_SUCCESS,
  GET_PROJECT_ID_TASK,
  ADD_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  DEL_TASK_SUCCESS,
  ON_CHANGE_TASK_DATE,
  ADD_PROJECT_FROM_TASK,
} from "../../actions/actionType";

const filterEmpTaskByDate = (incomingDate, fullTaskArr) => {
  let incoomDate = `${incomingDate.getMonth()}/${incomingDate.getDate()}/${incomingDate.getFullYear()}`;
  let filterArr = fullTaskArr.filter((el) =>
    `${new Date(el.createdDate).getMonth()}/${new Date(
      el.createdDate
    ).getDate()}/${new Date(el.createdDate).getFullYear()}` === incoomDate
      ? el
      : null
  );
  return filterArr;
};

// get project name, no repeatations.
const getProjectNames = (fullTaskArr) => {
  let projectNameArr = Array.from(
    new Set(fullTaskArr.map((tasks) => tasks.projectId))
  ).map((id) => {
    return {
      projectId: id,
      projectName: fullTaskArr.find((el) => el.projectId === id).projectName,
    };
  });
  return projectNameArr;
};

const initialState = {
  fullTaskArr: [],
  empTask: [],
  taskProjectId: "",
  projectNames: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMP_TASK_SUCCESS:
      let filterEmpByDate = filterEmpTaskByDate(
        new Date(),
        action.payload.empTask
      );
      let projectNamesArr = getProjectNames(filterEmpByDate); // get the unique project nawem from that day.

      return {
        // ...state,
        fullTaskArr: action.payload,
        empTask: filterEmpByDate,
        projectNames: action.payload.projectNames,
        taskProjectInfo: {
          projectId:
            filterEmpByDate.length > 0 ? filterEmpByDate[0].projectId : "",
          projectName:
            filterEmpByDate.length > 0 ? filterEmpByDate[0].projectName : "",
        },
      };
    case GET_PROJECT_ID_TASK:
      return {
        ...state,
        taskProjectInfo: {
          projectId: action.payload.projectId,
          projectName: action.payload.projectName,
        },
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        fullTaskArr: [...state.fullTaskArr, action.formData],
        empTask: [...state.empTask, action.formData],
      };
    case ADD_PROJECT_FROM_TASK:
      return {
        ...state,
        projectNames: [...state.projectNames, action.payload],
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        fullTaskArr: state.fullTaskArr.map((task) =>
          task.taskId === action.taskId ? action.formData : task
        ),
        empTask: state.empTask.map((task) =>
          task.taskId === action.taskId ? action.formData : task
        ),
      };
    case DEL_TASK_SUCCESS:
      return {
        ...state,
        fullTaskArr: state.fullTaskArr.filter(
          (task) => task.taskId !== action.payload
        ),
        empTask: state.empTask.filter((task) => task.taskId !== action.payload),
      };

    case ON_CHANGE_TASK_DATE:
      let filterEmpTask = filterEmpTaskByDate(
        action.payload,
        state.fullTaskArr
      );

      return {
        ...state,
        empTask: filterEmpTask,
        taskProjectInfo: {
          projectId: filterEmpTask.length > 0 ? filterEmpTask[0].projectId : "",
          projectName:
            filterEmpTask.length > 0 ? filterEmpTask[0].projectName : "",
        },
        projectNames: getProjectNames(filterEmpTask),
      };

    default:
      return state;
  }
}
