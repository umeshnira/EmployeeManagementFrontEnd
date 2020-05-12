import {
  GET_EMP_TASK_SUCCESS,
  GET_PROJECT_ID_TASK,
  ADD_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  DEL_TASK_SUCCESS,
} from "../../actions/actionType";

// on add change the empTask data and re-renders.
function handleAddTask(formData, taskProjectId, empTask) {
  let empTaskCopy = empTask;
  let taskArr = empTaskCopy.filter((el) => el.projectId === taskProjectId)[0]
    .tasks;
  taskArr.push(formData);
  return empTaskCopy;
}

const initialState = {
  empTask: [],
  taskProjectId: "",
  taskList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMP_TASK_SUCCESS:
      return {
        // ...state,
        empTask: action.payload,
        taskProjectId: action.payload[0].projectId,
        taskList: action.payload[0].tasks,
      };
    case GET_PROJECT_ID_TASK:
      return {
        ...state,
        taskProjectId: action.payload,
        taskList: state.empTask.filter(
          (el) => el.projectId === action.payload
        )[0].tasks,
      };
    case ADD_TASK_SUCCESS:
      const newTask = handleAddTask(
        action.formData,
        action.taskProjectId,
        state.empTask
      );
      return {
        ...state,
        // taskList: [...state.taskList, action.formData],
        empTask: [...state.empTask],
        // empTask: newTask,
        // empTask: newTask,
      };

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.taskId === 1 ? action.formData : task
        ),
      };

    case DEL_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.taskId !== 1),
        // empTask: [...state.empTask],
      };

    default:
      return state;
  }
}
