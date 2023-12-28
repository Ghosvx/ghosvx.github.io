document.addEventListener('DOMContentLoaded', function () {
    function checkOrientation() {
        if (window.innerWidth > window.innerHeight) {
            window.location.href = 'index.html';
        }
    }

    // Проверяем ориентацию при загрузке страницы
    checkOrientation();

    // Проверяем ориентацию при изменении размеров окна
    window.addEventListener('resize', checkOrientation);
});
