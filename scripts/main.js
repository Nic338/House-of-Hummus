import { HouseOfHummus } from "./house.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = HouseOfHummus()
}

renderAllHTML()

document.addEventListener('stateChanged', event => {
    console.log('State of data has changed. Regenrating HTML...')
    renderAllHTML()
})