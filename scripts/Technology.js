import { getTechnology } from "./database.js"

export const technologyHTML = () => {
    const technology = getTechnology()
    let technologyMenu = "<ul>"
    const listItems = technology.map(
        (tech) => {
            return `<li>
                <input type="radio" name="tech" value="${tech.id}" /> ${tech.package}
            </li>`
        })
        
    technologyMenu += listItems.join("")
    technologyMenu += "</ul>"
    
    return technologyMenu
}