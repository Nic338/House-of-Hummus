const database = {
    baseDishes: [
        {id: 1, name:"Hummus and Hot Sauce", price: 9.45},
        {id: 2, name:"Chicken Fried Lamb Kebab", price: 13.95},
        {id: 3, name:"Hot Chicken Greek Salad", price: 11.25},
        {id: 4, name:"Brussels Sprout Moussaka", price: 10.75},
        {id: 5, name:"Okrakopita", price: 10.25},
        {id: 6, name:"Fried Onion and Grape Leaves", price: 9.90},
        {id: 7, name:"Chess Baklava", price: 8.35},
        {id: 8, name:"Gyro Biscuits", price: 12.40},
        {id: 9, name:"Black Eye Pea Falafel", price: 10.70},
        {id: 10, name:"Pecan Pastitsio", price: 12.35},
    ],
    veggies: [
        {id: 1, name:"Okra", price: 2.49},
        {id: 2, name:"Collard Greens", price: 2.49},
        {id: 3, name:"Swiss Chard", price: 2.99},
        {id: 4, name:"Corn", price: 2.49},
        {id: 5, name:"Brussels Sprouts", price: 2.99},
        {id: 6, name:"Sweet Potatoes", price: 2.49},
        {id: 7, name:"Grits", price: 1.99},
        {id: 8, name:"Fried Green Tomatoes", price: 2.49},
    ],
    proteins: [
        {id: 1, name:"Chicken Fried Steak", price: 3.99},
        {id: 2, name:"Bacon", price: 2.99},
        {id: 3, name:"Turkey Leg", price: 3.99},
        {id: 4, name:"Ribs", price: 5.49},
        {id: 5, name:"Catfish", price: 3.49},
        {id: 6, name:"Souvlaki", price: 2.99},
    ],
    orderBuilder: {},
    customOrders: [
        // {id: 1, dishId: 1, veggieId: 1, proteinId: 1, timestamp: 1234508947291}
    ]
}

export const getBaseDish = () => {
    return database.baseDishes.map(baseDish => ({...baseDish}))
}
export const getVeggies = () => {
    return database.veggies.map(veggie => ({...veggie}))
}
export const getProteins = () => {
    return database.proteins.map(protein => ({...protein}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setBaseDish = (id) => {
    database.orderBuilder.dishId = id
}

export const setVeggie = (id) => {
    database.orderBuilder.veggieId = id
}

export const setProtein = (id) => {
    database.orderBuilder.proteinId = id
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders.length === 0 ? 1 : database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}