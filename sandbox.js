// Messing around with local storage / persistance
localStorage.setItem('current_city', 'portland');
localStorage.getItem('current_city');

localStorage.setItem('puppy', {name: 'fido', weight: '100 lbs'});

const myDog = { name: 'fido', type: 'fat' };
localStorage.setItem('puppy', myDog);
localStorage.getItem('puppy');

JSON.stringify(myDog);

const mySerializedDog = JSON.stringify(myDog);
localStorage.setItem = mySerializedDog;

// mySerializedDog.name = undefined;

const myReconstructedDog = JSON.parse(mySerializedDog);
// myReconstructedDog.name = fido;

JSON.parse('4'); // creates float 4
JSON.parse('true'); // creates a true boolean of true

