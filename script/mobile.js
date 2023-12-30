document.addEventListener('DOMContentLoaded', function () {
    function checkOrientation() {
      // Проверка userAgent на наличие ключевых слов, характерных для мобильных устройств
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
      if (isMobile) {
        // Пользователь находится на мобильном устройстве
        if (window.orientation === undefined || window.orientation === 0) {
          // Пользователь в вертикальной ориентации, перенаправление на другую страницу
          window.location.href = 'mobile.html';
        } else {
          // Пользователь в горизонтальной ориентации, продолжаем загрузку сайта
          // Можете также добавить дополнительную логику, если нужно
        }
      }
    }
  
    // Проверка ориентации при загрузке страницы только на мобильных устройствах
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      checkOrientation();
  
      // Слушатель события изменения ориентации устройства
      window.addEventListener('orientationchange', checkOrientation);
    }
  });