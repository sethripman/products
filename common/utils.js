export const CART_KEY = 'cart';

export const getCart = () => {
    if (localStorage.getItem(CART_KEY) === null) {
        return [];
    }
    const cart = JSON.parse(localStorage.getItem(CART_KEY));
    return cart;
};

export const setCart = (currentCartInLocalStorage) => {
    const serializedNewCart = JSON.stringify(currentCartInLocalStorage);
    localStorage.setItem(CART_KEY, serializedNewCart);
};

const initializeEmptyCart = () => {
    const serializedEmptyCart = '[]';

    localStorage.setItem('cart', serializedEmptyCart);
};

export const incrementInCartById = (id, cart) => {
    let thereIsAMatch = false;
    // for each order . . .
    cart.forEach(order => {
        // if you find a match
        if (order.id === id) {
            // increment the quantity
            order.quantity++;
            thereIsAMatch = true;
        }
    });

    if (thereIsAMatch) {
        // break out of jail
        return;
    } else {
        // if you find no match, make a new order
        const newItem = {
            id: id,
            quantity: 1,
        };

        // and put it in the cart
        cart.push(newItem);

    }

};



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