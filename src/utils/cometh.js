import { candidateId, baseURL } from "./constantValues.js";
import axios from "axios";
import { wait } from "./utility.js";

export const deleteCometh = (row, column) => {
  axios
    .delete(`${baseURL}/comeths`, {
      header: {
        "Content-Type": "application/json",
      },
      data: {
        candidateId,
        row,
        column,
      },
    })
    .then(wait(300))
    .catch((err) => console.error(err));
};

export const createComeths = async (row, column, direction) => {
  axios
    .post(`${baseURL}/comeths`, {
      header: {
        "Content-Type": "application/json",
      },
      body: {
        candidateId,
        row,
        column,
        direction,
      },
    })
    .catch((err) => console.error(err));
};
