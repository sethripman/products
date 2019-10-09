const emptyCart = [];
const CART_KEY = 'cart';

export const findByID = (array, idString) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idString) return array[i];
    }
    return null;
};

export const incrementByID = (id, cart) => {
    let thereIsAMatch = false;
    cart.forEach(order => {
        // if you find a match, increment quantity and break out of function
        if (order.id === id) {
            order.quantity++;
            thereIsAMatch = true;
        }
    });

    if (thereIsAMatch) {
        return;
    } else {
    
    // make a new order and push to cart array
        const newItem = {
            id: id,
            quantity: 1
        };

        cart.push(newItem);
    }
};

const initializeEmptyCart = () => {
    const serializedCart = JSON.stringify(emptyCart);
    localStorage.setItem('cart', serializedCart);
};

function displayChonk(chonk) {
    const newChonk = document.createElement('li');
    newChonk.className = chonk.category;
    newChonk.title = chonk.description;

    const h3 = document.createElement('h3');
    h3.textContent = chonk.name;
    newChonk.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + chonk.image;
    img.alt = chonk.name + ' image';
    newChonk.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + chonk.price.toFixed(2);
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = chonk.id;
    // Adding button for handling clicks
    button.addEventListener('click', () => {
        // we have access to a chonk in this function
        //get the current cart in the storage
        let currentCartInLocalStorage = JSON.parse(localStorage.getItem(CART_KEY));
        // if there is no cart, build me one
        if (!currentCartInLocalStorage) {
            initializeEmptyCart();
            currentCartInLocalStorage = JSON.parse(localStorage.getItem(CART_KEY));
        }

        //get the id + quantity / lineitem the just clicked fruit is in the cart
        //const currentChonkInCart = findByID(chonk.id, currentCartInLocalStorage);
        
        // examine the cart, take the key value with matching id, scrape the quantity, build a new identical object with ++ quantity
        //
       // currentChonkInCart.quantity++;

        //const newChonkToPutInCart = currentChonkInCart;

        //let newChonk;
        //if (!currentChonkInCart) {
         //   newChonk = {
           //     id: chonk.id,
             //   quantity: 1,
           // };
        //} else {
        //    currentChonkInCart.quantity++;
        //    newChonk = currentChonkInCart;
        //}

        // go into cart, find this fruit, increment quantity. This is impure with side effects and hard to test
        incrementByID(chonk.id, currentCartInLocalStorage);
        const serializediedNewCart = JSON.stringify(currentCartInLocalStorage);
        localStorage.setItem(CART_KEY, serializediedNewCart);
        console.log(localStorage.getItem(CART_KEY));


    });

    p.appendChild(button);

    newChonk.appendChild(p);

    const p2 = document.createElement('p');
    p2.textContent = chonk.size;
    newChonk.appendChild(p2);

    return newChonk;
}



export default displayChonk;