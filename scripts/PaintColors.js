import { getColors, setColors } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColors(parseInt(event.target.value))
        }
    }
)

export const colorsHTML = () => {
    const colors = getColors()
    let colorMenu = "<ul>"
    const listItems = colors.map(
        (color) => {
            return `<li>
                <input type="radio" name="color" value="${color.id}" /> ${color.color}
            </li>`
        })
        
    colorMenu += listItems.join("")
    colorMenu += "</ul>"
    
    return colorMenu
}