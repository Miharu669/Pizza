import readline from "readline";

const availablePizzas = [
  "pepperoni",
  "margherita",
  "hawaiian",
  "carbonara",
  "bbq",
];

const pizzaIngredients = [
  "pepperoni",
  "sausage",
  "ham",
  "bacon",
  "chicken",
  "anchovies",
  "extra cheese",
  "feta cheese",
  "tomatoes",
  "bell peppers",
  "onions",
  "olives",
  "mushrooms",
  "spinach",
  "jalapeños",
  "garlic",
  "basil",
  "oregano",
  "pineapple",
];

const preHeat = async () => {
  console.log("Pre-Heating the Oven at 210º...");
  const response = await OvenIsRdy();
  console.log(response);
};

const OvenIsRdy = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Beep! Oven is ready");
    }, 6000)
  );
};

const preparePizza = async (type, toppings = []) => {
  console.log("Taking the dough");
  console.log("Stretching the dough");
  console.log("Adding tomato sauce");
  console.log("Adding mozzarella");

  const validToppings = [];

  for (const topping of toppings) {
    const trimmedTopping = topping.trim().toLowerCase();

    if (pizzaIngredients.includes(trimmedTopping)) {
      if (trimmedTopping === "pineapple") {
        const answer = await askConfirmation(
          "Do you really want pineapple on your pizza? (yes/no): "
        );
        if (answer.trim().toLowerCase() !== "yes") {
          console.log("Pineapple not added to the pizza.");
          continue; // Easter egg ;)
        }
      }
      validToppings.push(trimmedTopping);
    } else {
      console.log(
        `Invalid topping: '${topping}' will not be added to the pizza.`
      );
    }
  }

  validToppings.forEach((topping) => {
    console.log(`Adding ${topping}`);
  });

  console.log("Baking the pizza");
  console.log("Pizza ready");
  console.log("Pizza delivered");
};

function askConfirmation(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

export { availablePizzas, pizzaIngredients, preparePizza, preHeat };
