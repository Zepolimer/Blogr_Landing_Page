// Drop down menu when you click on the hamburger
let dropDownBtn = document.querySelector('.dropbtn');
let wrapperMenu = document.querySelector('.wrapperMenu');

dropDownBtn.addEventListener('click', () => {
    if (wrapperMenu.style.display==="none") {
        wrapperMenu.style.display="block";
    } else {
        wrapperMenu.style.display="none";
    }
})


// Drop down
let titlePro = document.querySelector('.titleProduct');
let titleCom = document.querySelector('.titleCompany');
let titleCon = document.querySelector('.titleConnect');
let wrapPro = document.querySelector('.product');
let wrapCom = document.querySelector('.company');
let wrapCon = document.querySelector('.connect');
let arrowDown = document.querySelector('.arrow');

titlePro.addEventListener('click', () => {
    if (wrapPro.style.display==="none")
    {
        wrapPro.style.display="block";
        wrapCom.style.display="none";
        wrapCon.style.display="none";
    } else {
        wrapPro.style.display="none";
    }
})

titleCom.addEventListener('click', () => {
    if (wrapCom.style.display==="none")
    {
        wrapCom.style.display="block";
        wrapPro.style.display="none";
        wrapCon.style.display="none"
    } else {
        wrapCom.style.display="none";
    }
})

titleCon.addEventListener('click', () => {
    if (wrapCon.style.display==="none")
    {
        wrapCon.style.display="block";
        wrapPro.style.display="none";
        wrapCom.style.display="none";
    } else {
        wrapCon.style.display="none";
    }
})

