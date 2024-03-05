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

function getStatistics(): Statistics | null {
  try {
    const persons: Partial<Person>[] = JSON.parse(readFileSync("./persons.json").toString());

    for (const person of persons) {
      if (typeof person.age !== 'number' || (typeof person.height !== 'number' && typeof person.taille !== 'number')) {
        console.error("Erreur : les données du fichier persons.json ne sont pas correctement formées.");
        return null;
      }
    }

    const totalAge = persons.reduce((total, person) => total + (person.age || 0), 0);
    const totalHeight = persons.reduce((total, person) => total + (person.height || person.taille || 0), 0);

    const meanAge = totalAge / persons.length;
    const meanHeight = totalHeight / persons.length;

    return {
      meanAge,
      meanHeight
    };
  } catch (error) {
    console.error("Erreur lors de l'analyse des données du fichier persons.json :", error);
    return null;
  }
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
