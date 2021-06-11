import { colorsHTML } from "./PaintColors.js"
import { interiorsHTML } from "./Interiors.js"
import { technologyHTML } from "./Technology.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"


export const CarsRUs = () => {
    return `
    <h1>Cars-R-Us</h1>

    <article class="choices">
        <section class="choices__colors options">
            <h2>Paint Color</h2>
            ${colorsHTML()}
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${interiorsHTML()}
        </section>
        <section class="choices__technology options">
            <h2>Technology Package</h2>
            ${technologyHTML()}
        </section>

        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        
    </article>
`
}