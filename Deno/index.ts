
import express from "npm:express@4.18.2";


interface Person {
    name: string;
    age: number;
  }
  
  function greet(person: Person): string {
    return "Hello, " + person.name + "!";
  }
  
  const alice: Person = {
    name: "Alice",
    age: 36
  };
  
  console.log(greet(alice));


/////////////////////////////

const app = express();
app.get("/", (_req, res) => {
  res.send("Welcome to the Dinosaur API!");
});
app.listen(8000);