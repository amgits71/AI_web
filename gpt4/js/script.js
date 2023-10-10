// вешаем на окно прослушку загрузки DOM-дерева
// по окнчании загрузки, будет запущена функция
window.onload = () => {
    // ищем ноды (элементы DOM-дерева) для их получения для последующих манипуляций
    const burgerNode = document.querySelector(".header__burger_menu");
    const headerMenuNode = document.querySelector(".header__right");
    const closeMenuNode = document.querySelector(".menu__close");
    const bodyNode = document.querySelector("body");
  
    // блокируем и разблокируем скролл во время открытия модального окна
    const noOverflow = () => bodyNode.classList.add("oh");
    const overflow = () => bodyNode.classList.remove("oh");
  
    // показываем и скрываем меню
    const showMenu = () => headerMenuNode.classList.remove("hidden");
    const hideMenu = () => headerMenuNode.classList.add("hidden");
  
    // показываем и скрываем бургер
    const hideBurger = () => {
      burgerNode.classList.add("hidden");
      closeMenuNode.classList.add("hidden");
      showMenu();
    };
    const showBurger = () => {
      burgerNode.classList.remove("hidden");
      closeMenuNode.classList.remove("hidden");
      hideMenu();
    };
  
    // обновляем состояние бургера при ресайзе окна
    const updateBurgerState = () => {
      const width = window.innerWidth;
      console.log("width: ", width);
  
      if (width <= 1024) return showBurger();
  
      return hideBurger();
    };
  
    // выполняем ресайз окна на старте для получения корректного состояния меню при загрузке страницы
    updateBurgerState();
  
    // вешаем прослушку события резсайза для обновления состояния бургера
    window.addEventListener("resize", updateBurgerState);
  
    // обработчик клика на бургер
    const handleBurgerClick = () => {
      if (headerMenuNode.classList.contains("hidden")) {
        noOverflow();
        return showMenu();
      }
  
      overflow();
      hideMenu();
    };
  
    // вешаем прослушку клика по бургеру
    burgerNode.addEventListener("click", handleBurgerClick);
  
    // обработчик закрытия меню
    const handleCloseMenu = () => {
      overflow();
      hideMenu();
    };
  
    // вешаем прослушку на клик по кнопке "Закрыть меню"
    closeMenuNode.addEventListener("click", handleCloseMenu);
  };
