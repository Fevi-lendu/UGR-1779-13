

document.addEventListener('DOMContentLoaded', function() {
    var aboutMeButton = document.getElementById('moreButton');
    aboutMeButton.addEventListener('click', function() {
    window.location.href = 'about.html';
            });
        });
        const linkedin = document.querySelector('.fa-linkedin');

  
        linkedin.addEventListener('click', function () {
            window.open('https://www.linkedin.com/in/feven-lendu-41ab912a4/', '_blank');
        });
        const githubIcon = document.querySelector('.fa-github');

        githubIcon.addEventListener('click', function () {
            window.open('https://github.com/Fevi-lendu', '_blank');
        });
        const telegram = document.querySelector('.fa-telegram');

        telegram.addEventListener('click', function () {
      
            window.open('https://t.me/eftii', '_blank');
        });
        const twitter = document.querySelector('.fa-twitter');

        twitter.addEventListener('click', function () {
            
            window.open('https://twitter.com', '_blank');
        });
        const homeSitemap = document.querySelector('.homeSitemap');
        const aboutSitemap = document.querySelector('.aboutSitemap');
        const testimonialSitemap = document.querySelector('.testimonialSitemap');
        const educationSitemap = document.querySelector('.educationSitemap');
        const contactSitemap = document.querySelector('.contactSitemap');

   
        homeSitemap.addEventListener('click', function () {
            window.location.href = 'home.html';
        });

        aboutSitemap.addEventListener('click', function () {
            window.location.href = 'about.html';
        });

        testimonialSitemap.addEventListener('click', function () {
            window.location.href = 'testimonial.html';
        });

        educationSitemap.addEventListener('click', function () {
            window.location.href = 'education.html';
        });

        contactSitemap.addEventListener('click', function () {
            window.location.href = 'contact.html';
        });


const  menuBar = document.getElementById("header_menubar")
const dropdown = document.getElementById("dropdown")

menuBar.addEventListener("click", ()=>{
    console.log(dropdown.innerHTML)
    dropdown.classList.toggle("dropdown_visible")
})
let submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", function(){
    let first_name = document.getElementById("input_name").value;
    
    let email = document.getElementById("email").value;
    let comment = document.getElementById("contact_comment").value;
    let mailtoLink =  `mailto:fevenlendu777@gmail.com?subject= Want    to Contact&body=Name: ${first_name }%0D%0AEmail: ${email}%0D%0AComment: ${comment};`
    window.location.href = mailtoLink;
    document.getElementById('input_name').value = '';
    
    document.getElementById('email').value = '';
    document.getElementById('contact_comment').value = '';
})