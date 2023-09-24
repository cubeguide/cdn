document.addEventListener('DOMContentLoaded', function () {
    let path = window.location.pathname;

    if (window !== window.parent) {
        path = window.parent.location.pathname;
    }

    document.getElementById('path').textContent = path;
});