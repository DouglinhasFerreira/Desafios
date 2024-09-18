const themeSwitcher = document.getElementById('switcher');
const body = document.body;

themeSwitcher.addEventListener('change', function () {
    if (themeSwitcher.checked) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
});