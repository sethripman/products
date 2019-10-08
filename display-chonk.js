function displayChonk(chonk) {
    const li = document.createElement('li');
    li.className = chonk.category;
    li.title = chonk.description;

    const h3 = document.createElement('h3');
    h3.textContent = chonk.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + chonk.image;
    img.alt = chonk.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + chonk.price.toFixed(2);
    // const usd = chonk.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = chonk.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default displayChonk;