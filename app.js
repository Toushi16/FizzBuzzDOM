const list = document.getElementById('list');

for (let i = 1; i < 101; i++) {
// console.log (i);
const box = document.createElement ('li');
// console.log (box);
box.classList.add ('square');

list.append (box);

if ( i % 3 === 0 && i % 5 === 0) {
box.append ('fizzbuzz');
box.classList.add ('fizzbuzz');

}

else if ( i % 3 === 0 ) {
    box.append ('fizz')
    box.classList.add ('fizz')
}

else if ( i % 5 === 0 ) {
    box.append ('buzz')
    box.classList.add ('buzz')
}

else {
    box.append (i)
}

}



