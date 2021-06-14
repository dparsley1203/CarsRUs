
const database = {

    colors: [
        {id: 1, color: "Silver", price: 800 },
        {id: 2, color: "Midnight Blue", price: 1000},
        {id: 3, color: "Firebrick Red", price: 999},
        {id: 4, color: "Spring Green", price: 700}
    ],

    interiors: [
        {id: 1, interior: "Beige Fabric", price: 100},
        {id: 2, interior: "Charcoal Fabric", price: 200},
        {id: 3, interior: "White Leather", price: 400},
        {id: 4, interior: "Black Leather", price: 300}
    ],

    technology: [
        {id: 1, package: "Basic", price: 100},
        {id: 2, package: "Navigation", price: 200},
        {id: 3, package: "Visibility", price: 300},
        {id: 4, package: "Ultra", price: 450}
    ],

    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 400},
        {id: 2, style: "17-inch Pair Radial Black", price: 450},
        {id: 3, style: "18-inch Pair Spoke Silver", price: 500},
        {id: 4, style: "18-inch Pair Spoke Black", price: 550}
    ],
//test data
    orders: [
        {id: 1, colorId: 2, interiorId: 3, techId: 4, wheelId: 1, timestamp: 1234567899976}
    ],
//will be used for custom orders and filled with ids 
    orderBuilder: {} 
}

//Takes a customer order and adds the data to Orders; adds new id to orders being built
export const addCustomerOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.orders.length - 1
    newOrder.id = lastIndex >= 0 ? database.orders[lastIndex].id + 1 : 1
    newOrder.timestamp = Date.now()
    database.orders.push(newOrder)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getColors = () => [...database.colors]
export const getInteriors = () => [...database.interiors]
export const getTechnology = () => [...database.technology]
export const getWheels = () => [...database.wheels]
export const getOrders = () => [...database.orders]

export const setColors = (colorId) => database.orderBuilder.colorId = colorId
export const setInteriors = (interiorId) => database.orderBuilder.interiorId = interiorId
export const setTechnology = (techId) => database.orderBuilder.techId = techId
export const setWheels = (wheelId) => database.orderBuilder.wheelId = wheelId