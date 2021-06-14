import { getInteriors, setInteriors} from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInteriors(parseInt(event.target.value))
        }
    }
)

export const interiorsHTML = () => {
    const interiors = getInteriors()
    let interiorMenu = "<ul>"
    const listItems = interiors.map(
        (interior) => {
            return `<li>
                <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior}
            </li>`
        })
        
    interiorMenu += listItems.join("")
    interiorMenu += "</ul>"
    
    return interiorMenu
}