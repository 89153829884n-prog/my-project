// scripts/menu.js

// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    // Создаем оверлей для меню
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // Функция переключения меню
    function toggleMenu() {
        const isMenuOpen = mobileMenu.classList.contains('show');

        // Переключаем классы
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('show');
        overlay.classList.toggle('show');

        // Блокируем скролл при открытом меню
        document.body.style.overflow = isMenuOpen ? '' : 'hidden';

        // Меняем aria-атрибут для доступности
        mobileMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    }

    // Открытие/закрытие по клику на бургер
    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Закрытие по клику на оверлей
    overlay.addEventListener('click', toggleMenu);

    // Закрытие по клику на ссылку в меню
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
            toggleMenu();
        }
    });

    // Автозакрытие при увеличении экрана
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('show')) {
            toggleMenu();
        }
    });
}

// Кнопка "Наверх"
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Наверх');
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

// Показывать/скрывать кнопку при скролле
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Плавная прокрутка вверх
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Для старых браузеров
    if (typeof window.scrollTo !== 'function') {
        document.documentElement.scrollTop = 0;
    }
});