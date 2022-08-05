import axios from "axios";

const apiEP = "http://localhost:8000/api/v1/task/";

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(apiEP);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
