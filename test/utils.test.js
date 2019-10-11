// IMPORT MODULES under test here:
// import example from '../src/example.js';
import displayChonk from '../product/display-chonk.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import { findByID, calcLineItem, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;

test('renders a chonking boy', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const gday = {
        id: 'gday',
        name: 'Gday Mate',
        image: 'gday.png',
        description: 'The King from Down Under whose movements roll like thunder',
        category: 'chonk-img',
        price: 6.00,
        size: 'Wonderfully Hefty'
    };

    const expected = '<li class=\"chonk-img\" title=\"The King from Down Under whose movements roll like thunder\"><h3>Gday Mate</h3><img src=\"../assets/gday.png\" alt=\"Gday Mate image\"><p class=\"price\">$6.00<p class=\"center-pad\">#3</p><button value=\"gday\">Add</button></p><p>Wonderfully Hefty</p></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const output = displayChonk(gday);
    const html = output.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('renders a table row', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const gday = {
        id: 'gday',
        name: 'Gday Mate',
        image: 'gday.png',
        description: 'The King from Down Under whose movements roll like thunder',
        category: 'chonk-img',
        price: 6.00,
        size: 'Wonderfully Hefty'
    };

    const chonkOrder = {
        id: 'gday',
        quantity: 2
    };

    const expected = '<tr><td>Gday Mate</td><td>2</td><td>$6.00</td><td>$12.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const chonkElementTr = renderTableRow(gday, chonkOrder);
    const stringHtml = chonkElementTr.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(stringHtml, expected);
});

test('takes an array and returns the first item with a matching ID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cart = [{
        id: 'gday',
        quantity: 2
    }, {
        id: 'longman',
        quantity: 5
    }, {
        id: 'boss',
        quantity: 10
    }];

    const expected = {
        id: 'boss',
        quantity: 10
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const returnItem = findByID(cart, 'boss');

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(returnItem, expected);
});

test('takes quantity and price and returns the total price', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 7;
    const price = 5.73;

    //Act 
    // Call the function you're testing and set the result to a const
    const totalPrice = calcLineItem(quantity, price);
    const expected = 40.11;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(totalPrice, expected);
});

test('takes cart array and chonks array and returns total price', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const cart = [{
        id: 'gday',
        quantity: 2
    }, {
        id: 'longman',
        quantity: 5
    }, {
        id: 'boss',
        quantity: 10
    }];

    const chonks = [{
        id: 'gday',
        name: 'Gday Mate',
        image: 'gday.jpg',
        description: 'Wonderfully Hefty',
        category: 'chonk-img',
        price: 6.00,
        size: 'The King from Down Under whose movements roll like thunder'
    }, {
        id: 'longman',
        name: 'Long, Long Man',
        image: 'longman.jpg',
        description: 'Inexplicably long',
        category: 'chonk-img',
        price: 4.75,
        size: 'Dimensionally stretched, immense to the max'
    }, {
        id: 'boss',
        name: 'Emperor Bossman',
        image: 'boss.jpg',
        description: 'Brobdignagian - corpulent - monstrously huggable',
        category: 'chonk-img',
        price: 9.00,
        size: 'Often late to his meetings since him too busy feeding'
    }];

    //Act 
    // Call the function you're testing and set the result to a const
    const totalPrice = calcOrderTotal(cart, chonks);
    const expected = '$125.75';

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(totalPrice, expected);
});