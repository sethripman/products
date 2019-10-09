import renderTableRow from './render-table-row.js';
import cart from '../data/cart.js';
import chonks from '../data/chonks.js';
import { findByID, calcOrderTotal } from '../common/utils.js';

const tableElement = document.querySelector('tbody');

cart.forEach(chonkOrder => {
    const chonkIDFromOrder = chonkOrder.id;
    const currentChonk = findByID(chonks, chonkIDFromOrder);
    const row = renderTableRow(currentChonk, chonkOrder);
    tableElement.appendChild(row);

});

const totalCell = document.getElementById('order-total-cell');
totalCell.textContent = calcOrderTotal(cart, chonks);