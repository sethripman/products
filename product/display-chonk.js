import { getCart, setCart, incrementInCartById, findByID } from '../common/utils.js';

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
    // Adding button for handling clicks - call, retrieve, increment, set functions
    button.addEventListener('click', () => {
        // retrieve the cart and set to variable
        let currentCartInLocalStorage = getCart();
        incrementInCartById(button.value, currentCartInLocalStorage);
        setCart(currentCartInLocalStorage);
        // change quantity display with click
        let testChonk = findByID(currentCartInLocalStorage, button.value);
        quantity.textContent = '#' + testChonk.quantity;
    });

    p.appendChild(button);
    
    newChonk.appendChild(p);

    const p2 = document.createElement('p');
    p2.textContent = chonk.size;
    newChonk.appendChild(p2);

    // create quantity display
    const quantity = document.createElement('p');
    quantity.className = 'center-pad';
    newChonk.appendChild(quantity);

    return newChonk;
}

export default displayChonk;