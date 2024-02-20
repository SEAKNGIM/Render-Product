import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js";

let render = document.querySelector('#render-area')
products.map((product) => {
    render.innerHTML += cardComponent(product)
})
