const proofYeast = [
    "water" = '250ml of warm water',
    "yeast" = 'adding 1/4 teaspoon active dry yeast to the water',
]
const ingredientsDough = [
    "yeast proof" = 'yeasted water',
    "flour" = '500gr all-purpose flour',
    "beer" = 'adding 100ml of beer',
    "aove" =  '2 tablespoons of extra virgin olive oil',
    "pinchSalt" = '2 teaspoons of salt',
]
const ingredientsPizza = [
    "redPepper",
    "mince",
    "springOnion",
    "barbequeSauce",
    "tomatoSauce"]

const preHeat = async () => {
    console.log ('Pre-Heating the Oven at 220º...');
    const response = await OvenIsRdy()
    console.log(response)
}


const OvenIsRdy = async() => { return new Promise (resolve => setTimeout (() => {
     resolve ('Beep! Oven is ready')}
     , 6000 ));
}

function app() {
    preHeat()
    makePizza()
}

app()


function makePizza() {
    makeDough()
}

function makeDough() {
    console.log('Making the dough');
}
    
    /* let redPepper = 1
    let mince = 500
    let springOnion = 1
    let barbequeSauce = 1
    let tomatoSauce = 1    


 
function preparePizza ()
function bakePizza ()
function deliverPizza () */