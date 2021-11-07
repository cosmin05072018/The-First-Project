let carts = document.querySelectorAll('.card-btn');
console.log('run');

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log('a fost adaugat');
    })
}
