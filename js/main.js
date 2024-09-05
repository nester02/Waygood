const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-button');
const navBtnImg = document.querySelector('.nav-button__img');


navBtn.addEventListener("click", () => {
    nav.classList.toggle('open');
    if (nav.classList.contains('open')){
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
});
