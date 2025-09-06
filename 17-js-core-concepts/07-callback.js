function pakhiBhai (callMeBack, patro, patri) {
    console.log('Value of patro', patro);
    console.log('callMeBack Parameter', callMeBack);
    if(patri) {
        callMeBack(patro);
    }
    else {
        console.log('Tor kopale biya nai');
        
    }
}
function callSomeone (person) {
    console.log('calling', person);
}
// callSomeone('jodu');
pakhiBhai(callSomeone, 'rahul', 'abul');