let details = document.querySelectorAll('.detailsProduct');

for (let i = 0; i < details.length; i++){
    details[i].addEventListener('click', () => {
        console.log('run');
    })
}

