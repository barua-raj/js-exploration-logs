const city = 'Chittagong';
const part = city.slice(2,7);
console.log(part);

const sentence = 'I am a good person having multiple wives!';
console.log(sentence.split('a'));

const friendsStr = 'Rahim, Karim, Jalim, Mahim, Sahim, Dalim';
const friends = friendsStr.split(',');
console.log(friends);

const realFriends = [ 'Rahim', ' Karim', ' Jalim', ' Mahim', ' Sahim', ' Dalim' ];
console.log(realFriends.join());
console.log(realFriends.join('|'));

const firstName = 'Abul';
const lastName = 'Hasan';
const fullName = firstName + ' ' + lastName;
const fullName2 = firstName.concat(' ').concat(lastName);
console.log(fullName);
console.log(fullName2);
console.log(lastName.includes('d'));
