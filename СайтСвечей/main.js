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

        // �������� �������, � �������� ����� ����������
        const targetElement = document.querySelector(this.getAttribute('href'));

        // �������� ������ ���� ��� ���������� ��������
        const windowHeight = window.innerHeight;

        // �������� ���������� ��������
        const elementRect = targetElement.getBoundingClientRect();

        // ���������, ������� ����� ����������, ����� ������� �������� �� ������ ������
        const offset = elementRect.top + window.scrollY - (windowHeight / 2) + (elementRect.height / 2);

        // ������������ ��������
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});