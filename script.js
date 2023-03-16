
const MenuToggle = document.querySelector('.toggle');
const Navigation = document.querySelector('.navigation');

function toggleMenu(){
    MenuToggle.classList.toggle('active');
    Navigation.classList.toggle('active');
}

MenuToggle.addEventListener("click",toggleMenu);


const StarbucksImage = document.querySelector('.starbucks');
const CircleImage = document.querySelector('.circle');
const ImageList =document.querySelector('.thumb');
let image_1 = ImageList.item(0);
let image_2 = ImageList.item(1);
let image_3 = ImageList.item(2);

function imgSlider(anything){
    StarbucksImage.src=anything;
}

function changeCircleColor(color){
    CircleImage.style.background=color;
}

image_1.addEventListener("click",imgSlider,changeCircleColor('#117143'));
image_2.addEventListener("click",imgSlider,changeCircleColor('#eb7495'));
image_3.addEventListener("click",imgSlider,changeCircleColor('#d752b1'));




// image_1.addEventListener("click",changeCircleColor('#117143'));
// image_2.addEventListener("click",changeCircleColor('#eb7495'));
// image_3.addEventListener("click",changeCircleColor('#d752b1'));
