//Ingredientes
let masaPizza = "masa fresca";
let salsaDeTomate = "Salsa de tomate, ";
let comprarIngredientes = "queso mozarella, jamón, piña, champi. ";
let extra = "salsa barbacoa";
let temperatura = " 220C";
let amasar = "amasar la masa durante 5 minutos";
let extenderMasa = "dar forma plana y redonda a la masa";
let ingredientes = "poner una base de tomate, queso, jamón, piña y champiñones."
let horneadoPizza = "Llevar la pizza al horno durante 20 minutos. ";
let pizzaLista = "Sacar la pizza del horno, cuando el borde esté algo tostado, cortar y disfrutar.";

//Instrucciones
function comprarMasa() {
    console.log("1. Ir al supermercado a comprar una: " + masaPizza +  ", y conseguir los siguientes ingredientes: " + comprarIngredientes)
}

function preHeat() {
    console.log("2. Precalentar el horno a " + temperatura + ".");
}

function amasado() {
    console.log("3. A continuación " + amasar + " y después " + extenderMasa + " y " + ingredientes);
}

function add() {
    console.log("4. Puedes añadir " + extra + " al gusto.");
}

function heat() {
    console.log("5. " + horneadoPizza);
}

function comer() {
    console.log("6. " + pizzaLista);
}

function app() {
    comprarMasa()
    preHeat()
    amasado()
    add()
    heat()
    comer()
}
app()
