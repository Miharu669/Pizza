import prompt from "prompt-sync";
import { availablePizzas, preparePizza, preHeat } from "./pizzas.js";

const promptSync = prompt();

const selectedPizza = promptSync(
  "And your pizza is ... (pepperoni, margherita, hawaiian, carbonara, bbq...): "
).toLowerCase();

if (availablePizzas.includes(selectedPizza)) {
  console.log(`Pizza ${selectedPizza} in preparation`);
  preHeat().then(() => {
    preparePizza(selectedPizza);
  });
} else {
  console.log(`Sorry, we don't have ${selectedPizza} pizza.`);
}
