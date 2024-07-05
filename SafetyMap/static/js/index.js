
var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".modalBtn");
var span = document.getElementsByClassName("close")[0];
var body = document.body;
var navbar = document.getElementById("navbar")



span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
    navbar.style.display = "flex"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fetchPageAndDisplayInModal(pageUrl) {
    let imageUrl; 
    
    const activeBtn = document.querySelector(".modalBtn.active");
    
    if (activeBtn) {
        imageUrl = activeBtn.getAttribute('data-url');
    }

    fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalBody').innerHTML = data;
        const img = document.querySelector('.video-iframe').querySelector("img");
        if (imageUrl) {
            img.setAttribute('src', imageUrl); 
        }
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

btns.forEach(btn => {
    btn.onclick = function() {
        const activeBtn = document.querySelector(".modalBtn.active");
        if (activeBtn) {
            activeBtn.classList.remove("active");
        }
        btn.classList.add("active");
        body.style.overflow = "hidden";
        navbar.style.display = "none"

        fetchPageAndDisplayInModal("/video/");
        modal.style.display = "block";
    }
});

observer.observe(document.getElementById('modalBody'), { childList: true });
