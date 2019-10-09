import renderTableRow from './render-table-row.js';
import cart from '../data/cart.js';
import chonks from '../data/chonks.js';
import { findByID } from '../common/utils.js';

const tableElement = document.querySelector('tbody');

cart.forEach(chonkOrder => {
    const chonkIDFromOrder = chonkOrder.id;
    const currentChonk = findByID(chonks, chonkIDFromOrder);
    const row = renderTableRow(currentChonk, chonkOrder);
    tableElement.appendChild(row);

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