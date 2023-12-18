

document.addEventListener('DOMContentLoaded', function() {
    var aboutMeButton = document.getElementById('moreButton');
    aboutMeButton.addEventListener('click', function() {
    window.location.href = 'about.html';
            });
        });

document.addEventListener('DOMContentLoaded', function() {
var headerMenuBar = document.getElementById('header_menubar');
var dropdown = document.getElementsByClassName('dropdown');
        
headerMenuBar.addEventListener('click', function() {
    if (dropdown.style.display === 'none') {
    console.log('klkl')
              dropdown.style.display = 'block';
            } else {
              dropdown.style.display = 'none';
            }
          });
        });