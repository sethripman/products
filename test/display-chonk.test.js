// IMPORT MODULES under test here:
// import example from '../src/example.js';
import displayChonk from '../product/display-chonk.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
// import cart from '../data/cart.js';

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

    const expected = '<li class="chonk-img" title="The King from Down Under whose movements roll like thunder"><h3>Gday Mate</h3><img src="../assets/gday.png" alt="Gday Mate image"><p class="price">$6.00<button value="gday">Add</button></p><p>Wonderfully Hefty</p></li>';

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