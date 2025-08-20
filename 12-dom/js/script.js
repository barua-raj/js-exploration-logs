console.log("Hello from external link");
const student = {
    name: 'Abul Mia',
    id: 150,
    study: function (subject){
        // console.log('studying:', subject);
    }
}


// document.getElementsByTagName
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for (const li of liCollection){
    // console.log(li.innerText);
}
const allHeadings = document.getElementsByTagName('h1');
for (const heading of allHeadings){
    // console.log(heading.innerText);
}


// document.getElementById
const foodTitleH1 = document.getElementById('food-title');
console.log(foodTitleH1.innerText);
foodTitleH1.innerText = "Foods I hate to eat";

const nameItem = document.getElementById('name');
nameItem.innerText = "Wrong Name";


// document.getElementByClassName
const foreignElements = document.getElementsByClassName('foreign-food');
foreignElements.innerText = 'No';
console.log(foreignElements);

for (const element of foreignElements){
    console.log(element);
}


// document.querySelectorAll
const spanElements = document.querySelectorAll('#old-dhaka p span')
for (const span of spanElements) {
    console.log(span.innerText);
}