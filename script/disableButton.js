document.addEventListener("DOMContentLoaded", function () {
    var disabledButtons = document.querySelectorAll('.button.disabled');

    disabledButtons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            this.style.cursor = 'not-allowed';
        });
    });
});
