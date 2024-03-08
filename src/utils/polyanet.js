import { candidateId, baseURL } from "./constantValues.js";
import axios from "axios";
import { wait } from "./utility.js";

export const deletePolyanets = (row, column) => {
  axios
    .delete(`${baseURL}/polyanets`, {
      data: {
        candidateId,
        row,
        column,
      },
    })
    .then(wait(100))
    .catch((err) => console.error(err));
};

export const createPolyanets = async (row, column) => {
  axios
    .post(`${baseURL}/polyanets`, {
      candidateId,
      row,
      column,
    })
    .catch((err) => console.error(err));
};
