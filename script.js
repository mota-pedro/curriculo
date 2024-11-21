window.onload = function () {
    const sobreSection = document.getElementById("sobre-section");
    sobreSection.classList.add("show");
};

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('header nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = 80;
                const sectionPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
