import renderTableRow from './render-table-row.js';
// import cart from '../data/cart.js';
import chonks from '../data/chonks.js';
import { findByID, calcOrderTotal } from '../common/utils.js';
import { CART_KEY } from '../product/display-chonk';

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));

const tableElement = document.querySelector('tbody');

javascriptReadableCart.forEach(chonkOrder => {
    const chonkIDFromOrder = chonkOrder.id;
    const currentChonk = findByID(chonks, chonkIDFromOrder);
    const row = renderTableRow(currentChonk, chonkOrder);
    tableElement.appendChild(row);

});

const totalCell = document.getElementById('order-total-cell');
totalCell.textContent = calcOrderTotal(javascriptReadableCart, chonks);