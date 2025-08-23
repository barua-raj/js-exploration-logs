// option 2 to handle events

function makeYellow(){
    document.body.style.background = 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3 to handle events: get elements by ID and set onclick

const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3: slight different

const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 4: add eventListener