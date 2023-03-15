import { getBaseDish, setBaseDish } from "./database.js";


const baseDishes = getBaseDish()

document.addEventListener("change", (event) => {
    if (event.target.name === "dish") {
        setBaseDish(parseInt(event.target.value))
    }
}
)


export const Dishes = () => {
    let html = "<ul>"

    const listItemsArray = baseDishes.map(baseDish => {
        return `<li>
        <input type="radio" name="dish" value="${baseDish.id}" /> ${baseDish.name}
        </li>`
    })

    html += listItemsArray.join("")

    html += "</ul>"
    return html
}
