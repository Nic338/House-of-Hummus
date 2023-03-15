import { Dishes } from "./basedish.js"
import { Veggies } from "./veggies.js"
import { Proteins } from "./protein.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener("click",(event) => { 
    if (event.target.id === "orderButton"){
        addCustomOrder()
    }
    }
)

export const HouseOfHummus = () => {
    return `
   
    <h1><img src="https://i.imgur.com/e55sPpr.png" alt="logo" />Laura Kathryn's House of Hummus</h1>

        <article class="choices">
            <section class="choices__dishes options">
                <h2>Base Dish</h2>
                ${Dishes()}
            </section>
            <section class="choices__veggies options">
                <h2>Vegetable</h2>
                ${Veggies()}
            </section>
            <section class="choices__proteins options">
                <h2>Protein</h2>
                ${Proteins()}
            </section>
        </article>

        <article>
            <button id="orderButton">Purchase Combo</button>
        </article>

        <article class="customOrders">
            <h2>Monthly Sales</h2>
            ${Orders()}
        </article>
    `
}