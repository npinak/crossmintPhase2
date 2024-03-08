import { candidateId } from "./constantValues.js";
import axios from "axios";
import { wait } from "./utility.js";

export const getMap = async () => {
  const response = await axios
    .get(`https://challenge.crossmint.io/api/map/${candidateId}/goal`)
    .catch((err) => console.error(err));

  return response.data;
};

export const createMap = async (mapData) => {
  for (let row = 0; row < mapData.goal.length; row++) {
    for (let column = 0; column < mapData.goal[row].length; column++) {
      const objectType = mapData.goal[row][column].split("_");
      if (objectType.length === 2) {
        if (objectType[1] === "COMETH") {
          createComeths(row, column, objectType[0].toLowerCase());
        } else if (objectType[1] === "SOLOON") {
          createSoloons(row, column, objectType[0].toLowerCase());
        }
      } else {
        if (objectType[0] === "POLYANET") {
          createPolyanets(row, column);
        } else {
        }
      }
      await wait(1000);
    }
  }
};
