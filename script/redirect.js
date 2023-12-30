document.addEventListener('DOMContentLoaded', function () {
    function checkOrientationAndRedirect() {
        if (window.innerWidth > window.innerHeight) {
            window.history.back();
        }
    }

    // Проверяем ориентацию при загрузке страницы
    checkOrientationAndRedirect();

    // Проверяем ориентацию при изменении размеров окна
    window.addEventListener('resize', checkOrientationAndRedirect);

    // Проверяем ориентацию при изменении ориентации устройства
    window.addEventListener('orientationchange', checkOrientationAndRedirect);
});
