// href smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// mobile Navigation
const menu_click= document.getElementById('menu-icon');
menu_click.addEventListener('click', function(){
    menu_click.classList.toggle('Diam');
});
$(".nav-trigger").click(function(){
  $(".mobile-nav-wrapper").toggleClass("nav-active");
  $(".bg-overlay").toggleClass("overlay-active");
});