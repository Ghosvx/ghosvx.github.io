document.addEventListener('DOMContentLoaded', function () {
    var previousPage = document.referrer;

    function checkOrientationAndRedirect() {
        if (window.innerWidth > window.innerHeight) {
            if (previousPage) {
                window.location.href = previousPage;
            } else {
                // Если предыдущая страница не определена, перенаправляем на главную
                window.location.href = 'index.html';
            }
        }
    }

    // Проверяем ориентацию при загрузке страницы
    checkOrientationAndRedirect();

    // Проверяем ориентацию при изменении размеров окна
    window.addEventListener('resize', checkOrientationAndRedirect);

    // Проверяем ориентацию при изменении ориентации устройства
    window.addEventListener('orientationchange', checkOrientationAndRedirect);
});
