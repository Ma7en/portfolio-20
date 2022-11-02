



/*
==============================================
==============================================
*/


/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100);
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});




// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 100) {
//         btnTop.style.display = "block";
//     } else {
//         btnTop.style.display = "none";
//     }
// });

// btnTop.onclick = () => {
//     window.scrollTo({
//         // left: 0,
//         top: 0,
//         behavior: 'smooth',
//     })
// }

/* ====== end scroll to top btn ===== */


/* 
============================================
============================================
*/


/* ====== 1 stat landing type write ====== */

let typeTextLan_1 = "font-end",
typeTextLan_2 = "web Developer",
typeSpan_1 = document.getElementById("typespan-1"),
typeSpan_2 = document.getElementById("typespan-2");


window.addEventListener("load", () => {

    let i = 0,
        o = 0;

    let typeWriterLan_1 = setInterval(() => {
        
        typeSpan_1.textContent += typeTextLan_1[i];

        i++;

        if (i > typeTextLan_1.length - 1) {
            clearInterval(typeWriterLan_1);
        }

    }, 400);

    let typeWriterLan_2 = setInterval(() => {
        
        typeSpan_2.textContent += typeTextLan_2[o];

        o++;

        if (o > typeTextLan_2.length - 1) {
            clearInterval(typeWriterLan_2);
        }

    }, 400);

});


let lanlang = document.querySelector(".landing .lang");

window.addEventListener("scroll", () => {

    lanlang.classList.toggle("active", window.scrollY >= 100 );
});



/* ====== 1 end landing type write ====== */


/* 
============================================
============================================
*/


/* ====== 2 stat ul menu ====== */

let toggleMenu = document.querySelector(".toggle-menu");
let ulMenu = document.querySelector(".ul-menu");
let liClose = document.querySelector(".li_close");

// show
toggleMenu.addEventListener("click", () => {
    ulMenu.classList.toggle("open");
});


// hidden
liClose.addEventListener("click", () => {
    ulMenu.classList.remove("open");
});


window.addEventListener("scroll", () => {
    ulMenu.classList.remove("open");
})

/* ====== 2 end ul menu ====== */


/* 
============================================
============================================
*/


/* ====== start active li ====== */

let allLis = document.querySelectorAll(".ul-menu li");

allLis.forEach(function (ele) {
    ele.onclick = function () {
        // remove active class form all element
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        });

        this.classList.add("active");
    }


});


/* ====== end active li ======*/


/* 
============================================
============================================
*/


/* start chose tab lindaing */

let bulletsTest = document.querySelectorAll(".bullets_test li");
let bulTestArray = Array.from(bulletsTest);

let textTest = document.querySelectorAll(".container .test");
let textTestArray = Array.from(textTest);

bulTestArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        // console.log(ele);
        bulTestArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");

        /* text */
        textTestArray.forEach((textTest) => {
            textTest.style.display = "none";
        });

        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.test).style.display = "block";
    });
});


/* end chose tab landing */


/* 
============================================
============================================
*/







