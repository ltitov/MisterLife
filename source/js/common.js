window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

  });

});


// --------------------------------------------------------------------
// ----  акордион  -----
const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'active',
}

const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}

function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;
    openedAccordeon && closeAccordeon(openedAccordeon);
    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

var accFirst = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accFirst.length; i++) {
  accFirst[0].click();
}

// ----  акордион  -----
// --------------------------------------------------------------------
// ---- переключение табов -----

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

// ---- переключение табов -----
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
lightGallery(document.getElementById('scrinGalery'));



let masterSlider = new Swiper(".master-sec__slider", {
  spaceBetween: 15,
  slidesPerView: 3,
  freeMode: true,
  autoPlay: {
    delay: 500,
  },
  pagination: {
        el: ".master-sec__dots",
        clickable: true,
      },
  navigation: {
    nextEl: ".master-sec__next",
    prevEl: ".master-sec__prev",
  },
});




