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

const tabsParr = document.querySelector('.chose-tabs');


document.addEventListener('DOMContentLoaded', () => {
  let tabs = tabsParr.querySelector('.tabs');
  let tabsBtn = tabsParr.querySelectorAll('.tablinks');
  let tabsContent = tabsParr.querySelectorAll('.tabcontent');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tablinks')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('active')});
        tabsParr.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('active');
        tabsHandler(tabsPath);
      }
    });
  }

  let tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('active')});
    tabsParr.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
  };
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


lightGallery(document.getElementById('lightgallery'),{
  subHtmlSelectorRelative: true,
  addClass: 'fixed-size',
  appendSubHtmlTo: '.lg-empty-html'
});
lightGallery(document.getElementById('cert'));
lightGallery(document.getElementById('scrinGalery'));
// lightGallery();
const galerySliders = [...document.querySelectorAll('.look-slide')];

galerySliders.map(galerySlider => {
  lightGallery(galerySlider.querySelector('.look-tab'));
});



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

let lookSlider = new Swiper(".look-slider", {
  spaceBetween: 20,
  slidesPerView: 2,
  loop: true,
  // noSwiping: false,
  // allowTouchMove: false,
  navigation: {
    nextEl: ".look-next",
    prevEl: ".look-prev",
  },
});


let loopSlider = new Swiper(".loop-slider ", {
  spaceBetween: 20,
  slidesPerView: 5,
  loop: true,
  centerSlides: true,
  autoPlay: {
    delay: 900,
  },
  speed: 3000,
  disableOnInteraction: true,
  pauseOnMouseEnter: true,
  addSlidesBefore: 10,

  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});

loopSlider.autoplay.start();



// var frame = document.querySelector('.loop-track')
// frame.innerHTML = `<li class="loop-slide">${frame.innerHTML + frame.innerHTML}</li>`

const slides = [...document.querySelectorAll('.look-wrapper')];

// slides.forEach(slide => {
//     let tabs = slide.querySelector('.tabs');
//     let tabsBtn = slide.querySelectorAll('.tablinks');
//     let tabsContent = slide.querySelectorAll('.tabcontent');

//     if (tabs) {
//       tabs.addEventListener('click', (e) => {
//         if (e.target.classList.contains('tablinks')) {
//           const tabsPath = e.target.dataset.tabsPath;
//           tabsBtn.forEach(el => {el.classList.remove('active')});
//           slide.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('active');
//           tabsHandler(tabsPath);
//         }
//       });
//     }

//     let tabsHandler = (path) => {
//       tabsContent.forEach(el => {el.classList.remove('active')});
//       slide.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
//     };

// });


for (const slide of slides) {
  let tabs = slide.querySelector('.tabs');
  let tabsBtn = slide.querySelectorAll('.tablinks');
  let tabsContent = slide.querySelectorAll('.tabcontent');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tablinks')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => {el.classList.remove('active')});
        slide.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('active');
        tabsHandler(tabsPath);
      }
    });
  }

  let tabsHandler = (path) => {
    tabsContent.forEach(el => {el.classList.remove('active')});
    slide.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
  };

}





