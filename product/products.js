import chonks from '../data/chonks.js';
import displayChonk from './display-chonk.js';

const list = document.getElementById('chonks');

for (let i = 0; i < chonks.length; i++) {
    const chonk = chonks[i];
    const newElement = displayChonk(chonk);
    list.appendChild(newElement);
}