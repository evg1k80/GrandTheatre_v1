window.onload = function() {

    const headerElement = document.querySelector('.header');
    
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
            
        } else {
            headerElement.classList.add('_scroll');
            
        }
    }

    const headerObserver = new IntersectionObserver(callback);

    headerObserver.observe(headerElement);

    const sidebarBtn = document.querySelector('.sidebar__btn');
    const sidebar = document.querySelector('.sidebar');
    sidebarBtn.addEventListener('click', function (e) {
        sidebarBtn.classList.toggle('_active');
        sidebar.classList.toggle('_active');
    })



}