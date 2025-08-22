// 1. parent node

const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. create child node

const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to Visit';
placesSection.appendChild(h1);
// create ul
const ul = document.createElement('ul');
// create li
const li1 = document.createElement('li');
li1.innerText = 'Bandarban';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Rangamati';
ul.appendChild(li2);

placesSection.appendChild(ul);



// 3. append placeSection to the mainContainer
mainContainer.appendChild(placesSection);


// easier HTML create

const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Math</li>
    <li>Physics</li>
    <li>Chesmitry</li>
    <li>Biology</li>
</ul>
`

mainContainer.appendChild(booksSection);