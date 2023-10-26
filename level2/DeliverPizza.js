// const prompt = require(´prompt-sync´)({sigint:true});

import PromptSync from "prompt-sync";

import { DeliverPizza } from "./level2/DeliverPizza";

function app() {
    const prompt = PromptSync();
    const pizzaName = prompt ("And your pizza is...(tropical): ");
}