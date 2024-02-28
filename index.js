window.addEventListener('scroll', function () {
    var header = document.getElementById('navbar');
    if (window.scrollY > 50) { 
        header.style.backgroundColor = '#555'; 
    } else {
        header.style.backgroundColor = '#333'; 
    }
});