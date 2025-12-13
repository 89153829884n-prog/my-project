// Открытие/закрытие бургер-меню
const burger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

if (burger && navList) {
    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Адаптивное изменение количества колонок в masonry
function updateMasonryColumns() {
    const masonryGrid = document.querySelector('.masonry-grid');
    if (!masonryGrid) return;

    const width = window.innerWidth;

    if (width < 576) {
        masonryGrid.style.columnCount = 1;
    } else if (width < 992) {
        masonryGrid.style.columnCount = 2;
    } else {
        masonryGrid.style.columnCount = 3;
    }
}

// Инициализация при загрузке и изменении размера окна
window.addEventListener('load', updateMasonryColumns);
window.addEventListener('resize', updateMasonryColumns);

// Добавление класса для мобильной навигации
function checkMobileNavigation() {
    const nav = document.querySelector('.nav__list');
    if (window.innerWidth <= 991) {
        nav.classList.add('mobile');
    } else {
        nav.classList.remove('mobile');
        nav.classList.remove('active');
        if (burger) burger.classList.remove('active');
    }
}

window.addEventListener('load', checkMobileNavigation);
window.addEventListener('resize', checkMobileNavigation);