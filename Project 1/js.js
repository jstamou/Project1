'use strict'
document.querySelector('#prices').addEventListener('click', function () {
    alert('Prices are still not available');
})




document.querySelector('#searchbtn').addEventListener('click', function () {
    alert('Your search is complete!');
})

const buttonscrollto = document.querySelector('#learn');
const kartess = document.querySelector('#kartes');

buttonscrollto.addEventListener('click', function (e) {
    const kartesscoords = kartess.getBoundingClientRect();


    window.scrollTo({
        left: kartesscoords.left,
        top: kartesscoords.top,
        behavior: 'smooth'
    })

});


