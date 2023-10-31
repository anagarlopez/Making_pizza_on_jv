import { deliverPizza } from "./deliverPizza";

const tropical = {
    ingredients: ["tomate, mozarella, jamón, piña"],
};

const barbacoa = {
    ingredients: ["salsa barbacoa, mozarella, bacon, pollo, maíz"],
};

export function choosePizza(pizzaName) {
    let selectedPizza;

    if (pizzaName = "tropical") {
        selectedPizza = tropical;
    }

    else if (pizzaName = "barbacoa") {
        selectedPizza = barbacoa;
    }
    console.log("You have chosen " + pizzaName + ".")
    deliverPizza(selectedPizza)
}