import { readFileSync } from "fs";

interface Person {
  age: number;
  height?: number;
  taille?: number;

}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics {
  const persons: Partial<Person>[] = JSON.parse(readFileSync("./persons.json").toString());
  
  const totalAge = persons.reduce((total, person) => total + (person.age as number), 0);
  const totalHeight = persons.reduce((total, person) => total + (person.height || person.taille || 0), 0);

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
