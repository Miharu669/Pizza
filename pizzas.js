const availablePizzas = ['pepperoni', 'margherita', 'hawaiian', 'carbonara', 'bbq'];

const preHeat = async () => {
  console.log('Pre-Heating the Oven at 210º...');
  const response = await OvenIsRdy();
  console.log(response);
};

const OvenIsRdy = async () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve('Beep! Oven is ready');
    }, 6000)
  );
};

const preparePizza = (type) => {
  console.log("Taking the dough");
  console.log("Stretching the dough");
  console.log("Adding tomato sauce");
  console.log("Adding mozzarella");

  switch (type) {
    case 'pepperoni':
      console.log("Adding pepperoni");
      break;
    case 'margherita':
      console.log("Adding extra tomato");
      break;
    case 'hawaiian':
      console.log("Adding pineapple and ham");
      break;
      case 'carbonara':
      console.log("Adding bacon and egg");
      break;
    case 'bbq':
      console.log("Adding BBQ sauce and chicken");
      break;
    default:
      console.log("Adding unknown ingredients");
  }

  console.log("Baking the pizza");
  console.log("Pizza ready");
  console.log("Pizza delivered");
};

export { availablePizzas, preparePizza, preHeat };
