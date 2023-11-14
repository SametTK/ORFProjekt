document.addEventListener("DOMContentLoaded", function() {
    var toggleBar = document.querySelector('.toggle-bar');
    var mainMenu = document.querySelector('.mainmenu');


    toggleBar.addEventListener('click', function() {
        mainMenu.classList.toggle('show');

    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.toggle-bar') && !event.target.closest('.mainmenu')) {
            mainMenu.classList.remove('show');

        }
    });
});
