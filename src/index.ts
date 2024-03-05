import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  const totalAge = persons.reduce((total, person) => total + person.age, 0);
  const totalHeight = persons.reduce((total, person) => total + person.height, 0);
  const meanAge = totalAge / persons.length;
  const meanHeight = totalHeight / persons.length;

  return {
    meanAge,
    meanHeight
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
