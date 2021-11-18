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
    if (event.type == "blur" && this.value.length < 5)  this.value = "";
  }
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)
  });
});

const tabsParr = document.querySelector('.chose-tabs');
if (tabsParr) {
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = tabsParr.querySelector('.tabs');
    const tabsBtn = tabsParr.querySelectorAll('.tablinks');
    const tabsContent = tabsParr.querySelectorAll('.tabcontent');
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
    const tabsHandler = (path) => {
      tabsContent.forEach(el => {el.classList.remove('active')});
      tabsParr.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
    };
  });
}

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
  accFirst[0].click(); //--- открыть первый акордион по умолчанию
}
// --------------------------------------------------------------------
// ---- переключение табов -----

function tabs(evt, pageName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].classList.remove('active');
   }
   tablinks = document.getElementsByClassName("tab-nav");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(pageName).className += " active";
   evt.currentTarget.className += " active";
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
    const selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }
      item.classList.toggle("active");
    });
    document.addEventListener('click', function(event) {
      if (!item.contains(event.target)) {
        item.classList.remove('active')
      }
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

const galerySliders = [...document.querySelectorAll('.look-slide')];
galerySliders.map(galerySlider => {lightGallery(galerySlider.querySelector('.look-tab'));});


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
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      centerSlides: true,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 14,
      centeredSlides: true,
      initialSlide: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18,
      centeredSlides: false,
    },
  }
});

let lookSlider = new Swiper(".look-slider", {
  spaceBetween: 20,
  slidesPerView: 2,
  navigation: {
    nextEl: ".look-next",
    prevEl: ".look-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centerSlides: true,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  }
});

const loop = document.querySelector('.loop-slider');

if (loop) {
  let loopSlider = new Swiper(".loop-slider ", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoPlay: {
      delay: 900,
    },
    speed: 3000,
    slidesPerView: 'auto',
    pauseOnMouseEnter: true,
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
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
      },
    }
  });

  loopSlider.autoplay.start();
}

const slides = document.querySelectorAll('.look-wrapper');

slides.forEach(slide => {
    const tabs = slide.querySelector('.tabs');
    const tabsBtn = slide.querySelectorAll('.tablinks');
    const tabsContent = slide.querySelectorAll('.tabcontent');
    if (tabs) {
      for (const item of tabsBtn) {
        item.addEventListener('click', (e) => {
          if (e.currentTarget.classList.contains('tablinks')) {
            const tabsPath = e.currentTarget.dataset.tabsPath;
            tabsBtn.forEach(el => {el.classList.remove('active')});
            slide.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('active');
            tabsHandler(tabsPath);
          }
        });
      }
    }
    const tabsHandler = (path) => {
      tabsContent.forEach(el => {el.classList.remove('active')});
      slide.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
    };

});

const allModals = document.querySelectorAll('.modal');
const callBtns = document.querySelectorAll('[data-btn="call-master"]');
const qeoBtns = document.querySelectorAll('[data-btn="geo-btn"]');
const callModal = document.querySelector('[data-modal="master"]');
const qeoModal = document.querySelector('[data-modal="map-master"]');
const overlay = document.querySelector('.overlay');
const callCloses = document.querySelectorAll('.call-modal__close');
const geoCloses = document.querySelectorAll('.geo-modal__close');

for (const callBtn of callBtns) {
  callBtn.addEventListener('click', function() {
    callModal.classList.add('active');
    overlay.classList.add('active');
    qeoModal.classList.remove('active');

    mobMenu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('fixed');
  })
}

for (const callClose of callCloses) {
  callClose.addEventListener('click', function() {
    callModal.classList.remove('active');
    overlay.classList.remove('active');
  })
}

for (const qeoBtn of qeoBtns) {
  qeoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    qeoModal.classList.add('active');
    overlay.classList.add('active');
  })
}

for (const geoClose of geoCloses) {
  geoClose.addEventListener('click', function() {
    qeoModal.classList.remove('active');
    overlay.classList.remove('active');
  })
}

document.onclick = function(e){
  if ( e.target.querySelector('.modal')) {
    for (const allModal of allModals) {
      allModal.classList.remove('active');
    }
    overlay.classList.remove('active');
  };
};

const hoverItems = document.querySelectorAll('.desctop-menu__item');
hoverItems.forEach(function(hoverItem) {
  hoverItem.addEventListener('mouseenter', function(event){
    let currentItem = event.currentTarget;
    let target = event.relatedTarget.closest('li');
    if(target.classList.contains('active')) {
      target.classList.remove('active');
    };
    currentItem.classList.add('active');
  });
});

function priceMore(){
  let moreBtn = document.querySelector('.price-sec__button');
  let moreLists = [...document.querySelectorAll('.price-sec__list')];
  let secondClick = false;
  if (moreBtn) {
    moreBtn.addEventListener('click', function(){
      if (secondClick) {
        moreBtn.innerHTML = 'все неисправности';
        for (const moreList of moreLists) {
          moreList.style.maxHeight = null;
        }
        secondClick = false;
      } else {
        moreBtn.innerHTML = 'скрыть';
        for (const moreList of moreLists) {
          moreList.style.maxHeight = moreList.scrollHeight + "px";
        }
        secondClick = true;
      };
    });
  }
};



function galeryMore(){
  let moreBtn = document.querySelector('.reviews-sec__more');
  let moreLists = [...document.querySelectorAll('.reviews-sec__box')];
  let secondClick = false;

  if (document.documentElement.clientWidth < 1239 ) {
    if (moreBtn) {
      moreBtn.addEventListener('click', function(e){
        e.preventDefault();
        if (secondClick) {
          moreBtn.innerHTML = 'Смотреть все отзывы';
          for (const moreList of moreLists) {
            moreList.style.maxHeight = null;
          }
          secondClick = false;
        } else {
          moreBtn.innerHTML = 'скрыть';
          for (const moreList of moreLists) {
            moreList.style.maxHeight = moreList.scrollHeight + "px";
          }
          secondClick = true;
        };
      });
    }
  }



};

function scrinMore(){
  let moreBtn = document.querySelector('.veiw-more');
  let moreLists = [...document.querySelectorAll('.scrin-sec__list')];
  let secondClick = false;

  if (document.documentElement.clientWidth < 1239 ) {
    if (moreBtn) {
      moreBtn.addEventListener('click', function(e){
        e.preventDefault()
        if (secondClick) {
          moreBtn.innerHTML = 'Посмотреть еще';
          for (const moreList of moreLists) {
            moreList.style.maxHeight = null;
          }
          secondClick = false;
        } else {
          moreBtn.innerHTML = 'скрыть';
          for (const moreList of moreLists) {
            moreList.style.maxHeight = moreList.scrollHeight + "px";
          }
          secondClick = true;
        };
      });
    }
  }


};

function brandMore(){
  let moreBtn = document.querySelector('.brand-sec__more');
  let moreLists = [...document.querySelectorAll('.brand-sec__list')];
  let secondClick = false;
  if (moreBtn) {
    moreBtn.addEventListener('click', function(){
      if (secondClick) {
        moreBtn.innerHTML = 'показать все';
        for (const moreList of moreLists) {
          moreList.style.maxHeight = null;
        }
        secondClick = false;
      } else {
        moreBtn.innerHTML = 'скрыть';
        for (const moreList of moreLists) {
          moreList.style.maxHeight = moreList.scrollHeight + "px";
        }
        secondClick = true;
      };
    });
  }
};



const replaceItem = document.querySelector('.roster-box');
const replaceParrent = document.querySelector('.master-sec__box');
const newParrent = document.querySelector('.wrapper');

const mapItem = document.querySelector('.geo-master__map');
const oldGeoBox = document.querySelector('.geo-master__box');
const newGeoBox = document.querySelector('.geo-master__item');
const certSliderContainer = document.querySelector('.contact-sert__inner');
const contactSliderContainer = document.querySelector('.contact-first__slider');
const centerSliderContainer = document.querySelector('.center-sec__mobile-wrapper');

const modalButtonOrder = document.querySelector('.order-master__button');
const modalButtonNewWrapper = document.querySelector('.mobile-replace-wrapper');
const modalButtonOldWrapper = document.querySelector('.order-master');

function replaceRoster(){
  if (document.documentElement.clientWidth <= 767 ) {
    newParrent && newParrent.insertAdjacentElement("beforeend", replaceItem);
    newGeoBox && newGeoBox.insertAdjacentElement("beforeend", mapItem);

    if (modalButtonOldWrapper) {
      modalButtonNewWrapper && modalButtonNewWrapper.insertAdjacentElement("beforeend", modalButtonOrder);
    }


  } else {
    replaceParrent && replaceParrent.insertAdjacentElement("beforeend", replaceItem);
    oldGeoBox && oldGeoBox.insertAdjacentElement("beforeend", mapItem);
    if (modalButtonOldWrapper) {
      modalButtonOldWrapper && modalButtonOldWrapper.insertAdjacentElement("beforeend", modalButtonOrder);
    }
  }
}

function addClassForMobileSliders(){
  if (document.documentElement.clientWidth <= 767) {
    contactSliderContainer && contactSliderContainer.classList.add('swiper-container');
    certSliderContainer && certSliderContainer.classList.add('swiper-container');
    centerSliderContainer && centerSliderContainer.classList.add('swiper-container');
  } else {
    contactSliderContainer && contactSliderContainer.classList.remove('swiper-container');
    certSliderContainer && certSliderContainer.classList.remove('swiper-container');
    centerSliderContainer && centerSliderContainer.classList.remove('swiper-container');
  }
}


document.addEventListener('DOMContentLoaded', function(){
  replaceRoster();
  priceMore();
  galeryMore();
  addClassForMobileSliders();
  initMobilesliders();
  scrinMore();
  brandMore();
});
window.addEventListener('resize', function(){
  replaceRoster();
  priceMore();
  galeryMore();
  addClassForMobileSliders();
  initMobilesliders();
  scrinMore();
  brandMore();
});

function initMobilesliders() {
  if (contactSliderContainer) {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;
    const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined) mySwiper.destroy( true, true );
        return;
        // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
    };
    const enableSwiper = function() {
      mySwiper = new Swiper(".contact-first__slider", {
        spaceBetween: 10,
        slidesPerView: 2,
        slidesPerGroup: 2,
        navigation: {
          nextEl: ".contact-first__next",
          prevEl: ".contact-first__prev",
        },
      });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
  }

  if (certSliderContainer) {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;
    const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined) mySwiper.destroy( true, true );
        return;
        // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
    };
    const enableSwiper = function() {
      mySwiper = new Swiper(".contact-sert__inner", {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.6,
        loop: true,
        slidesPerGroup: 1,
      });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
  }

  if (centerSliderContainer) {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;
    const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined) mySwiper.destroy( true, true );
        return;
        // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
    };
    const enableSwiper = function() {
      mySwiper = new Swiper(".center-sec__mobile-wrapper", {
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          el: ".center-sec__dots",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          567: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }
      });
    };
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
  }

};




const burger = document.querySelector('.mobile-burger');
const mobMenu = document.querySelector('.mob-wrapper')
const mobMenuActive = document.querySelector('.mob-wrapper.active');
const body = document.body;

const toggleMenu = function() {
  mobMenu.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('fixed');
}

burger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == mobMenu || mobMenu.contains(target);
    const its_btnMenu = target == burger;
    const menu_is_active = mobMenu.classList.contains('active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});
