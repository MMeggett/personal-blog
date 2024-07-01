document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.querySelector('#modeSwitch');

    // Check if the user has a preference for dark mode using localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
        document.body.classList.toggle('dark-mode', currentMode === 'dark');
        modeSwitch.checked = currentMode === 'dark';
    }

    // Event listener for mode switch change
    modeSwitch.addEventListener('change', function () {
        if (modeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});

function goBack() {
    window.location.href = 'index.html';
}