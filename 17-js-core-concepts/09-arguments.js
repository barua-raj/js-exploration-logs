function add(a, b) {
    console.log(arguments);
    const para = [...arguments];
    console.log(para);
    
}
add (88, 77, 4, 3, 5);