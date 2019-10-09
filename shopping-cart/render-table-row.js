import { makePrettyCurrency } from '../common/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (chonk, order) => {
    const tableRow = document.createElement('tr');
    const totalPrice = order.quantity * chonk.price;
    const prettyPrice = makePrettyCurrency(chonk.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    tableRow.appendChild(makeTd(chonk.name));
    tableRow.appendChild(makeTd(order.quantity));
    tableRow.appendChild(makeTd(prettyPrice));
    tableRow.appendChild(makeTd(prettyTotal));


    return tableRow;
};