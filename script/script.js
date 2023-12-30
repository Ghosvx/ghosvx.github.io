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




