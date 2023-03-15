import { getVeggies, setVeggie } from "./database.js";

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    if (event.target.name === "veggie") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Veggies = () => {
    let html = "<ul>"

    const listItemsArray = veggies.map(veggie => {
        return `<li>
        <input type="radio" name="veggie" value="${veggie.id}" /> ${veggie.name}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}