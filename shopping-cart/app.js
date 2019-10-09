import renderTableRow from './render-table-row.js';
import cart from '../data/cart.js';
import chonks from '../data/chonks.js';
// import { makePrettyCurrency } from '../common/utils.js';

const tableElement = document.querySelector('tbody');

cart.forEach(chonkOrder => {
    // store order ID in a readable variable
    const chonkIDFromOrder = chonkOrder.id;

    // loop through chonk array to find the matching chonk to the chonk in this order
    for (let i = 0; i < chonks.length; i++) {
        // if the IDs match...
        if (chonks[i].id === chonkIDFromOrder) {
            // create a table row from the relevant chonk and the chonkOrder
            const row = renderTableRow(chonks[i], chonkOrder);

            tableElement.appendChild(row);
        }
    }

});

/*

Alternate loop for each method, more readable

let cartTotal;
cart.forEach(chonkOrder => {
    chonks.forEach(chonk => {
        let chonkTotal = 0;

        if (chonk.id === chonkIDFromOrder) {
            const row = renderTableRow(chonk, chonkOrder);

            tableElement.appendChild(row);

            chonkTotal = chonk.price * chonkOrder.quantity;
            cartTotal += chonkTotal;
    }
}
}) 


const totalCell = document.getElementById('order-total-cell');
totalCell.textContent = cartTotal;

*/