import PromptSync from "prompt-sync";

import { DeliverPizza } from "./modules/DeliverPizza.js";
import { choosePizza } from "./modules/choosePizza.js";

function app() {
    const prompt = PromptSync();
    const pizzaName = prompt("And your pizza is ... (tropical, barbacoa): ");

    let result = choosePizza(pizzaName);
}

app()
