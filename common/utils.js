export const makePrettyCurrency = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export const findByID = (array, idString) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idString) return array[i];
    }
    return null;
};



/*
const totalChonkPrice = (chonks, quantity) => chonks.price * quantity;
export const cartTotal = (chonks, cart) => {

    
};
*/