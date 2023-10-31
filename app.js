import PromptSync from "prompt-sync";

import { choosePizza } from "./choosePizza.js";

function app() {
    const prompt = PromptSync();
    const pizzaName = prompt("What pizza do you want? ... (tropical, barbacoa):");
    choosePizza(pizzaName);
}

app()
