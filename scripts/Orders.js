import { getColors, getInteriors, getTechnology, getWheels, getOrders } from "./database.js"


const buildOrderListItem = (order) => {

const colors = getColors()
const foundColor = colors.find(
    (color) => {
        return color.id === order.colorId
    }
)

const interiors = getInteriors()
const foundInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const technology = getTechnology()
const foundTechnology = technology.find(
    (tech) => {
        return tech.id === order.techId
    }
)

const wheels = getWheels()
const foundWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)

const totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
    The vehicle configuration of order #${order.id} cost ${costString}.  Placed on ${new Date(order.timestamp).toLocaleString()}
</li>`

}

export const Orders = () => {
    const orders = getOrders()

    let ordersHtml = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    ordersHtml += listItems.join("")
    ordersHtml += "</ul>"

    return ordersHtml
}