import "./styles.css";
import { getMap, createMap } from "./utils/mapFunctions.js";

async function setMap() {
  const mapData = await getMap();

  createMap(mapData);
}
setMap();
