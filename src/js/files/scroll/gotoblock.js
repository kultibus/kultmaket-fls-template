// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, getHash, FLS } from "../functions.js";
// Подключение дополнения для увеличения возможностей
// Документация: https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавной проктутки к блоку
export let gotoBlock = (
  targetBlock,
  noHeader = false,
  speed = 500,
  offsetTop = 0
) => {
  const targetBlockElement = document.querySelector(targetBlock);
  if (targetBlockElement) {
    let headerItem = "";
    let headerItemHeight = 0;
    if (noHeader) {
      // headerItem = 'header.header';
      // headerItemHeight = document.querySelector(headerItem).offsetHeight;
      // const width = document.documentElement.offsetWidth;
      const width = document.documentElement.clientWidth;

      headerItemHeight =
        width > 1310
          ? 120
          : width > 991.98
            ? 110
            : width > 767.98
              ? 100
              : width > 479.98
                ? 90
                : 80;
    }
    let options = {
      speedAsDuration: true,
      speed: speed,
      header: headerItem,
      offset: offsetTop,
      easing: "easeOutQuad",
    };
    // Закрываем меню, если оно открыто
    document.documentElement.classList.contains("menu-open")
      ? menuClose()
      : null;

    if (typeof SmoothScroll !== "undefined") {
      // Прокрутка с использованием дополнения
      new SmoothScroll().animateScroll(targetBlockElement, "", options);
    } else {
      // Прокрутка стандартными средствами
      let targetBlockElementPosition =
        targetBlockElement.getBoundingClientRect().top + scrollY;
      targetBlockElementPosition = headerItemHeight
        ? targetBlockElementPosition - headerItemHeight
        : targetBlockElementPosition;
      targetBlockElementPosition = offsetTop
        ? targetBlockElementPosition - offsetTop
        : targetBlockElementPosition;
      window.scrollTo({
        top: targetBlockElementPosition,
        behavior: "smooth",
      });
    }
    FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
  } else {
    FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
  }
};
