
const ingredients = ["flour","water","pinchSalt","beer","yeast","aove","redPepper","mince","springOnion","barbequeSauce","tomatoSauce"]
const OvenIsRdy = async() => { return new Promise (resolve => serTimeout (() => {
     resolve ('Beep! Oven is ready')}
     , 2500 ));
}

const preHeat = async ()=> {
    console.log ('PreHeated');
    const response = await OvenIsRdy()
    console.log(response)
}

function makeDough(o) {
    let dough 
    let result = []
    for (
        dough = 0;
        dough !==null;
        dough =
        dough.getPrototypeOf(dough))
        {
           result = result.concat(flour, water, beer, pinchSalt, yeast, aove) ;
        }
        return result;
        }
    
    /*let redPepper = 1
    let mince = 500
    let springOnion = 1
    let barbequeSauce = 1
    let tomatoSauce = 1    


 
function preparePizza ()
function bakePizza ()
function deliverPizza () */