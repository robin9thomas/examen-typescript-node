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
  const ages = persons.map(person => person.age);
  return Math.max(...ages);
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
