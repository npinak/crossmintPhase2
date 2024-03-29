import { candidateId, baseURL } from "./constantValues.js";
import axios from "axios";
import { wait } from "./utility.js";

export const deleteSoloons = (row, column) => {
  axios
    .delete(`${baseURL}/soloons`, {
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

export const createSoloons = async (row, column, color) => {
  axios
    .post(`${baseURL}/soloons`, {
      header: {
        "Content-Type": "application/json",
      },
      body: {
        candidateId,
        row,
        column,
        color,
      },
    })
    .catch((err) => console.error(err));
};
