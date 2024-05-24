
const ingredients = ["flour","water","pinchSalt","beer","yeast","aove","redPepper","mince","springOnion","barbequeSauce","tomatoSauce"]

const preHeat = async () => {
    console.log ('PreHeated');
    const response = await OvenIsRdy()
    console.log(response)
}


const OvenIsRdy = async() => { return new Promise (resolve => setTimeout (() => {
     resolve ('Beep! Oven is ready')}
     , 2500 ));
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
    console.log("Preparar la masa");
}
    
    /* let redPepper = 1
    let mince = 500
    let springOnion = 1
    let barbequeSauce = 1
    let tomatoSauce = 1    


 
function preparePizza ()
function bakePizza ()
function deliverPizza () */