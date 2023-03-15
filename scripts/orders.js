import { getBaseDish, getOrders, getProteins, getVeggies } from "./database.js";

const basedishes = getBaseDish()
const proteins = getProteins()
const veggies = getVeggies()

const buildOrderListItem = (order) => {
    const foundBaseDish = basedishes.find(
        (baseDish) => {
            return baseDish.id === order.dishId
        }
    )

    const foundVeggie = veggies.find(
        (veggie) => {
            return veggie.id === order.veggieId
        }
    )
    const foundProtein = proteins.find(
        (protein) => {
            return protein.id === order.proteinId
        }
    )

    const totalCost = foundBaseDish.price + foundVeggie.price + foundProtein.price


    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Receipt #${order.id} = ${costString}
    </li>`

}


export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "<ul>"
    
    return html
}