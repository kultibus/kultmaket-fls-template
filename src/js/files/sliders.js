/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Autoplay,
  Pagination,
  Keyboard,
  Mousewheel,
  Lazy,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
import "../../scss/base/swiper-pagination.scss";
import "../../scss/base/swiper-lazy.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import "swiper/scss";
// import 'swiper/scss/pagination';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".advantages__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".advantages__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      // spaceBetween: 60,
      // autoHeight: true,
      speed: 1500,
      allowTouchMove: false,

      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			*/
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },
      // События
      on: {},
    });
  }
  if (document.querySelector(".popup-slider__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".popup-slider__slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Keyboard, Mousewheel, Lazy],
      observer: true,
      observeParents: true,
      // initialSlide: 8,
      // slidesPerGroup: 3,
      // slidesPerView: 1,
      // spaceBetween: 150,
      // autoHeight: true,
      speed: 900,

      //touchRatio: 0,
      simulateTouch: true,
      grabCursor: true,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      preloadImages: false,
      lazy: {
        loadOnTransitionStart: true,
        loadPrevNext: true,
      },
      // Пагинация
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        // dynamicBullets: true,
        // dynamicMainBullets: 10,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        sensitivity: 2,
        // invert: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 1,
          // spaceBetween: 30,
          spaceBetween: 10,
          // autoHeight: true,
        },
        768: {
          // slidesPerView: 1,
          // spaceBetween: 60,
          spaceBetween: 20,
        },
        992: {
          // slidesPerView: 1,
          // spaceBetween: 120,
          spaceBetween: 40,
        },
        1268: {
          // slidesPerView: 1,
          // spaceBetween: 120,
          spaceBetween: 40,
        },
      },
      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
