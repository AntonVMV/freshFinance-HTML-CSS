function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('active');
        }
    });
}

let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}   


const priceCards = document.querySelectorAll('.pricing__card');
priceCards.forEach(item => {
    item.addEventListener('mouseenter', classToggle);
    item.addEventListener('mouseleave', classToggle);
})

const strategyCards = document.querySelectorAll('.strategy__card');
strategyCards.forEach(item => {
    item.addEventListener('mouseenter', classToggle);
    item.addEventListener('mouseleave', classToggle);
})


function classToggle(){
    this.classList.toggle('active');
}

/// Burger btn

const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.menu__list');

burgerBtn.addEventListener('click', burgerToggle);

function burgerToggle() {
    burgerMenu.classList.toggle('hidden');   
}