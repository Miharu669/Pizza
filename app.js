

import readline from "readline";
import { availablePizzas, preparePizza, preHeat } from "./pizzas.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function promptForPizza() {
  return new Promise((resolve) => {
    let selectedPizza = '';

    const promptMessage = `What pizza would you like? Choose from: ${availablePizzas.join(', ')}, or enter 'custom' for custom toppings: `;

    rl.question(promptMessage, (input) => {
      selectedPizza = input.trim().toLowerCase();

      if (selectedPizza === 'custom') {
        promptForCustomToppings().then((toppings) => {
          resolve({ type: 'custom', toppings });
        });
      } else if (isValidPizzaOption(selectedPizza)) {
        resolve({ type: 'predefined', pizza: selectedPizza });
      } else {
        console.log(`Sorry, '${selectedPizza}' is not a valid option. Please choose from the available options or enter 'custom' for custom toppings.`);
        promptForPizza().then(resolve);
      }
    });
  });
}


function promptForCustomToppings() {
  return new Promise((resolve) => {
    let toppings = '';

    const promptMessage = `Enter your custom toppings (comma-separated): `;

    rl.question(promptMessage, (input) => {
      toppings = input.trim();

      const toppingsArray = toppings.split(',').map(item => item.trim());

      if (isValidCustomPizzaInput(toppings)) {
        resolve(toppingsArray);
      } else {
        console.log('Invalid input for custom toppings. Please enter at least one topping.');
        promptForCustomToppings().then(resolve);
      }
    });
  });
}


function isValidPizzaOption(input) {
  return availablePizzas.includes(input);
}


function isValidCustomPizzaInput(input) {
  const toppingsArray = input.split(',').map(item => item.trim());
  return toppingsArray.length > 0;
}


async function main() {
  try {
    const pizzaChoice = await promptForPizza();

    if (pizzaChoice.type === 'predefined') {
      const { pizza } = pizzaChoice;
      console.log(`Pizza ${pizza} in preparation`);
      await preHeat();
      preparePizza(pizza);
    } else if (pizzaChoice.type === 'custom') {
      const toppings = pizzaChoice.toppings;
      console.log(`Custom pizza with toppings: ${toppings.join(', ')} in preparation`);
      await preHeat();
      preparePizza('custom', toppings);
    }

    

    rl.close(); 
  } catch (error) {
    console.error('Error occurred:', error);
    rl.close(); 
}

}
main();
