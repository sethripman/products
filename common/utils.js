export const makePrettyCurrency = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export const findByID = (array, idString) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idString) return array[i];
    }
    return null;
};

export const calcLineItem = (quantity, price) => {
    return Math.round((quantity * price) * 100) / 100;
};

export const calcOrderTotal = (cartArray, chonksArray) => {
    let orderTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const currentChonk = findByID(chonksArray, cartArray[i].id);
        const currentChonkTotalPrice = calcLineItem(cartArray[i].quantity, currentChonk.price);
        orderTotal += currentChonkTotalPrice;
    }
    
    return Math.round((orderTotal) * 100) / 100;
};    

/*
const totalChonkPrice = (chonks, quantity) => chonks.price * quantity;
export const cartTotal = (chonks, cart) => {

    
};
*/