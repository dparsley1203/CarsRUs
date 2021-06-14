import { getWheels, setWheels } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const wheelsHTML = () => {
    const wheels = getWheels()
    let wheelsMenu = "<ul>"
    const listItems = wheels.map(
        (wheel) => {
            return `<li>
                <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.style}
            </li>`
        })
        
    wheelsMenu += listItems.join("")
    wheelsMenu += "</ul>"
    
    return wheelsMenu
}