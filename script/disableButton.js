document.addEventListener("DOMContentLoaded", function () {
    var disabledButtons = document.querySelectorAll('.button.disabled');

    disabledButtons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            this.style.cursor = 'not-allowed';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function checkOrientation() {
        // ... (ваш существующий код)
    }

    function enableSwipe() {
        const sections = document.querySelectorAll('section');
        let currentSectionIndex = 0;

        const hammer = new Hammer(document.body);

        hammer.on('swipeleft', function () {
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToCurrentSection();
            }
        });

        hammer.on('swiperight', function () {
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToCurrentSection();
            }
        });
    }

    function scrollToCurrentSection() {
        const sections = document.querySelectorAll('section');
        const currentSection = sections[currentSectionIndex];
        currentSection.scrollIntoView({ behavior: 'smooth' });
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        checkOrientation();
        enableSwipe();
        window.addEventListener('orientationchange', checkOrientation);
    }
});
