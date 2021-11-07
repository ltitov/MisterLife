


function addClassToHeader(){   // ----  функция липкой шапки   -----
  if (document.documentElement.clientWidth > 992) {
    window.onscroll = function() {fixedHeader()}
    function fixedHeader() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
  };
}

// window.addEventListener('resize', () => {
//   addClassToHeader();
// });
// window.addEventListener('DOMContentLoaded', () => {
//   addClassToHeader();
// });

// for (const anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     document.body.classList.remove('body-fixed');
//     mobileMenu.classList.remove('active');
//     buttons.forEach(button => button.classList.remove('active'));
//     e.preventDefault();
//     const blockID = anchor.getAttribute('data-href');
//     let sections =  document.querySelectorAll('.' + blockID);
//     sections.forEach(function(section) {
//       section.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     });
//   });
// };

// document.addEventListener("DOMContentLoaded", function(event) {
//   // ----  инициализация анимаций  -----


//   if (document.documentElement.clientWidth < 1200) {

//   }
// });

// --------------------------------------------------------------------
// ----  акордион  -----

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ----  акордион  -----
// --------------------------------------------------------------------
// ---- переключение страниц -----

function tabs(evt, pageName) {
   // Declare all variables
   var i, tabcontent, tablinks;

   // Get all elements with class="tabcontent" and hide them
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     // tabcontent[i].style.display = "none";
     tabcontent[i].classList.remove('active');
   }

   // Get all elements with class="tablinks" and remove the class "active"
   tablinks = document.getElementsByClassName("tab-nav");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }

   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(pageName).className += " active";
   evt.currentTarget.className += " active";
   // document.getElementById(navName).className += " active";
}

// ---- переключение страниц -----
// --------------------------------------------------------------------

// --------------------------------------------------------------------

// --------------------------------------------------------------------
// ---- скролл к верху страницы -----
let timeOut;
function goUp() {
   let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}



// -----------------  Селект  --------------------

const select = document.querySelectorAll(".select");

if (select.length) {
  select.forEach((item) => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector(".select__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("is-active");
    });
  });
}


lightGallery(document.getElementById('lightgallery'));
lightGallery(document.getElementById('cert'));

let masterSlider = new Swiper(".master-sec__slider", {
  spaceBetween: 15,
  slidesPerView: 3,
  pagination: {
        el: ".master-sec__dots",
        clickable: true,
      },
  navigation: {
    nextEl: ".master-sec__next",
    prevEl: ".master-sec__prev",
  },
});
