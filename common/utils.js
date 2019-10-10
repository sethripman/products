export const CART_KEY = 'cart';

export const getCart = () => {
    // if there is no cart in storage, set an empty array as the cart in memory
    if (localStorage.getItem(CART_KEY) === null) {
        const serializedEmptyCart = '[]';
        localStorage.setItem(CART_KEY, serializedEmptyCart);
    }
    // Then, return a parsed copy of the cart in storage
    const cart = JSON.parse(localStorage.getItem(CART_KEY));
    return cart;
};

export const setCart = (workingCart) => {
    // Serialize the current cart and then set in local storage
    const serializedNewCart = JSON.stringify(workingCart);
    localStorage.setItem(CART_KEY, serializedNewCart);
};

export const incrementInCartById = (id, cart) => {
    // use findByID to look for a match
    // if there is no match in the cart, create a new line item and push to cart
    if (findByID(cart, id) === null) {
        const newItem = {
            id: id,
            quantity: 1,
        };
        
        cart.push(newItem);
        return cart;
    } else {
        //Increment quantity of matching item
        cart.forEach(chonk => {
            // if you find a match
            if (chonk.id === id) {
                // increment the quantity
                chonk.quantity++;
            }
        });
        return cart;
    }
};

export const clearCart = () => {
    // remove current cart from storage, set empty array as new cart
    localStorage.removeItem(CART_KEY);
    const serializedEmptyCart = '[]';
    localStorage.setItem(CART_KEY, serializedEmptyCart);
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
    
    orderTotal = Math.round((orderTotal) * 100) / 100;
    return makePrettyCurrency(orderTotal);
};    