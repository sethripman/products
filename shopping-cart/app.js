import renderTableRow from './render-table-row.js';
import chonks from '../data/chonks.js';
import { getCart, findByID, calcOrderTotal } from '../common/utils.js';

const tableElement = document.querySelector('tbody');
let cart = getCart();
const orderButton = document.getElementById('place-order');

cart.forEach(chonkOrder => {
    const chonkIDFromOrder = chonkOrder.id;
    const currentChonk = findByID(chonks, chonkIDFromOrder);
    const row = renderTableRow(currentChonk, chonkOrder);
    tableElement.appendChild(row);

});

const totalCell = document.getElementById('order-total-cell');
totalCell.textContent = calcOrderTotal(cart, chonks);

if (totalCell.textContent !== '$0.00') orderButton.classList.remove('hidden');

// add event handler for purchase button
