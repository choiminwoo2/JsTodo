const bgImg = [
    "back_1920_1",
    "back_1920_2",
];

const randomChosen = Math.floor(Math.random() * bgImg.length);

//window.addEventListener("DOMContentLoaded",()=>{
    const bgHtml = document.querySelector('.background_img');
    bgHtml.src = `img/${bgImg[randomChosen]}.jpg`;
   // document.body.appendChild('.wrap');
// });





