var shoose = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const sour = document.querySelector('.sour');
const plus = document.querySelector('.plus');
const input = document.querySelector('#input');
const itemCountAlert = document.querySelector('.item-count-span');
const itemvalueshop = document.querySelector('.item-value');
const total = document.querySelector('.total-money');
const shopping = document.querySelector('.shopping');
const cardItem = document.querySelector('.item');
const cardButton = document.querySelector('.Checkout');
const del = document.querySelector('.delete');
const selected = document.querySelectorAll('.selected');
const sliderThum = document.querySelectorAll('.slider-thum');
const mainProductPic = document.querySelector('.main-product-pic');
const mainProduct = document.querySelector('.main-product');
const black = document.querySelector('.black');
const lightBox = document.querySelector('.light-box');
const close = document.querySelector('.close');
const addToCart = document.querySelector('.add-card');
const sliderThumlb = document.querySelectorAll('.slider-thum-lb');
const mainProductPiclb = document.querySelector('.main-product-pic-lb');
const mainProductlb = document.querySelector('.main-product-lb');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const shoppingCart = document.querySelector('.shopping-cart');
const itemDelete = document.querySelector('.dele');
const previos = document.querySelector('.previos');
const next = document.querySelector('.next');
const mediaQuary = window.matchMedia('min-width: 750px');



var itemCount = input.value;
var price = 0;
var count = 0;



function deletee() {
    itemDelete.addEventListener('click', function () {
        count = 0;
        itemCountAlert.innerHTML = count;
        document.querySelector('.emptyCard').style.display = "block";

        cardItem.style.display = "none";
        cardButton.style.display = "none";
        return count;
    })

}
// Main Box Slider
for (let i = 0; i < sliderThum.length; i++) {
    sliderThum[i].onclick = function () {
        mainProductPic.src = shoose[i];
        if (sliderThum.length > 0) {
            for (let j = 0; j < sliderThum.length; j++) {
                sliderThum[j].classList.remove("selected");

            }
        }
        sliderThum[i].classList.add('selected');
    }
}

var index = 0;
var arrayCount = shoose.length - 1;
function mobileadd() {
    mainProductPic.src = shoose[index];
}


next.addEventListener('click', function () {
    index += 1;
    if (index > arrayCount) {
        index = 0;
    }
    mobileadd();
});

previos.addEventListener('click', function () {
    index -= 1;
    console.log(`index-1:  ${index}`);
    if (index < 0) {
        index = arrayCount;
    }
    mobileadd();
});

// // Light Box Slider


for (let i = 0; i < sliderThumlb.length; i++) {
    sliderThumlb[i].onclick = function () {
        mainProductPiclb.src = shoose[i];
        if (sliderThumlb.length > 0) {
            for (let j = 0; j < sliderThumlb.length; j++) {
                sliderThumlb[j].classList.remove("selected");

            }
        }
        sliderThumlb[i].classList.add('selected');
    }
}

mainProductPic.addEventListener('click', function () {
    black.classList.remove("hidden");
    lightBox.classList.remove("hidden");

})
close.addEventListener('click', function () {
    black.classList.add("hidden");
    lightBox.classList.add("hidden");
})
plus.addEventListener('click', function () {
    if (itemCount >= 0) {
        itemCount++;
        input.value = itemCount;


    }
})
sour.addEventListener('click', function () {
    if (itemCount > 0) {
        itemCount--;
        input.value = itemCount;

    }

})




addToCart.addEventListener('click', function () {


    deletee();
    count = Number(itemCount + count);

    itemCountAlert.innerHTML = count;
    itemvalueshop.innerHTML = count;
    total.innerHTML = itemCount;
    price = count * 125.00;
    total.textContent = price;
    total.innerHTML = price.toFixed(2);

    cardItem.style.display = "grid";
    cardButton.style.display = "block";
    document.querySelector('.emptyCard').style.display = "none";



});

const newspaperSpinning = [
    { transform: 'scale(0.5)' },
    { transform: 'scale(1)' }
];

const newspaperTiming = {
    duration: 300,
    iterations: 1,
}


shopping.addEventListener('click', function () {
    deletee();
    if (shoppingCart.classList == "shopping-cart hidden") {
        shoppingCart.classList.remove("hidden");
        shoppingCart.animate(newspaperSpinning, newspaperTiming);
    }
    else {
        shoppingCart.classList.add("hidden");
    }

    if (count == 0) {
        cardItem.style.display = "none";
        cardButton.style.display = "none";
        document.querySelector('.emptyCard').style.display = "block";
    }

});
