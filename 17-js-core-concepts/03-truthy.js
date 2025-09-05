let data;
data = 0;
data = ''; // falsy
data = ' '; // truthy for whitespace
data = '0';
data = false;
data = true;
data = null;
data = {};
data = [];
data = false;
data = true;
data = [];
// console.log('value of a data', data);

if (data) {
    // console.log('Value of data is truthy');
}
else {
    // console.log(data,'is falsy');
}
// if we need to capture falsy value to go inside if block : use logical not
if(!data) {
    // console.log('Inside if with a falsy value');
}

// capture all positive value
// double not
// capture any value to boolean (true false)
if (!!data === true) {
    console.log("only true inside the double not"); 
}