document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    sidebarItems.forEach(item => {
        const link = item.querySelector('a').getAttribute('href');
        if (link === '#' || link === currentPage || (currentPage === '' && link === 'device.html')) {
            item.classList.add('active');
        }
        item.addEventListener('click', function() {
            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});