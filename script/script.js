document.addEventListener('keydown', function (event) {
  if (event.key === 'F1') {
    event.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const snowfallContainer = document.body;

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    const size = Math.random() * 5 + 2;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}%`;
    snowflake.style.top = `${startY}%`;
    snowflake.style.animation = `snowfall ${duration}s linear infinite`;

    snowfallContainer.appendChild(snowflake);
  }

  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }

  const headerText = document.getElementById('greeting');
  const languages = ['Привет', 'Вітаю', 'Ciao', 'Hola', 'Olá', 'Hello'];
  let currentIndex = 0;

  function changeHeaderText() {
    const targetText = languages[currentIndex];
    let currentText = '';
    let charIndex = 0;
    let typingSpeed = 200;

    function addChar() {
      currentText += targetText[charIndex];
      headerText.textContent = currentText;
      headerText.innerHTML = currentText;
      charIndex++;

      if (charIndex < targetText.length) {
        setTimeout(addChar, typingSpeed);
      } else {
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % languages.length;
          changeHeaderText();
        }, 1500);
      }
    }

    addChar();
  }

  if (headerText) {
    headerText.style.whiteSpace = 'nowrap';
    changeHeaderText();
  } else {
    console.error('Не удалось найти элемент с id "greeting"');
  }
});

let key1Pressed = false;
let key2Pressed = false;

document.addEventListener('keydown', function (event) {
  if (event.key === '1') {
    key1Pressed = true;
  } else if (event.key === '2') {
    key2Pressed = true;
  }

  if (key1Pressed && key2Pressed) {
    openMsgBox();
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'Escape') {
    closeMsgBox();
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === '1') {
    key1Pressed = false;
  } else if (event.key === '2') {
    key2Pressed = false;
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'J') {
    openMsgBox();
  }
});

function openMsgBox() {
  var msgBox = document.getElementById('msgBox');
  msgBox.style.display = 'block';
}

function closeMsgBox() {
  var msgBox = document.getElementById('msgBox');
  msgBox.classList.add('closeMsgBox');
  setTimeout(function () {
    msgBox.style.display = 'none';
    msgBox.classList.remove('closeMsgBox');
  }, 500);
}


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


document.addEventListener('DOMContentLoaded', function () {
  function enterFullscreenOnHorizontal() {
    // Проверка, является ли устройство мобильным
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Проверка ориентации устройства
      if (window.orientation !== undefined && window.orientation === 90) {
        // Устройство находится в горизонтальной ориентации

        // Запрос на вход в полноэкранный режим
        const documentElement = document.documentElement;
        if (documentElement.requestFullscreen) {
          documentElement.requestFullscreen();
        } else if (documentElement.mozRequestFullScreen) { // Firefox
          documentElement.mozRequestFullScreen();
        } else if (documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
          documentElement.webkitRequestFullscreen();
        } else if (documentElement.msRequestFullscreen) { // IE/Edge
          documentElement.msRequestFullscreen();
        }
      }
    }
  }

  // Вызов функции при загрузке страницы
  enterFullscreenOnHorizontal();

  // Слушатель события изменения ориентации устройства
  window.addEventListener('orientationchange', enterFullscreenOnHorizontal);
});

function videoTouch(event) {
  if (event) event.preventDefault();

  // Проверка userAgent на наличие ключевых слов, характерных для мобильных устройств
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Проверка ориентации устройства
  if (isMobile && window.screen.orientation && window.screen.orientation.type === 'landscape-primary') {
    // Устройство находится в горизонтальной ориентации

    // Запрос на вход в полноэкранный режим
    const { documentElement } = document;
    if (documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if (documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
  }
}

// Привязываем функцию к событию touchstart
document.body.addEventListener('touchstart', videoTouch);


