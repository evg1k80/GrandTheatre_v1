window.onload = function() {

    

    const sidebarBtn = document.querySelector('.sidebar__btn');
    const sidebar = document.querySelector('.sidebar');
    sidebarBtn.addEventListener('click', function (e) {
        sidebarBtn.classList.toggle('_active');
        sidebar.classList.toggle('_active');
    })



}