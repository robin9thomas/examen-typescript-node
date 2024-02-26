import { readFileSync } from "fs";

function getStatistics() {
  const persons = JSON.parse(readFileSync("./persons.json").toString());
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
