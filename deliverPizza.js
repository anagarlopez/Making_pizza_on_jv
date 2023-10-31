export function deliverPizza(selectedPizza) {
    for (let i = 0; 1 < selectedPizza.ingredients.length; i++) {
        console.log("Add " + selectedPizza.ingredients[i] + ".");
    }
}