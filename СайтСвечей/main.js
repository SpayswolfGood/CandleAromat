function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
        else
        {
            change.target.classList.remove('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Получаем элемент, к которому нужно прокрутить
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Получаем высоту окна для вычисления смещения
        const windowHeight = window.innerHeight;

        // Получаем координаты элемента
        const elementRect = targetElement.getBoundingClientRect();

        // Вычисляем, сколько нужно прокрутить, чтобы элемент оказался по центру экрана
        const offset = elementRect.top + window.scrollY - (windowHeight / 2) + (elementRect.height / 2);

        // Прокручиваем страницу
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});