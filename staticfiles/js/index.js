var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".modalBtn");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

btns.forEach(btn => {
    btn.onclick = function() {
        fetchPageAndDisplayInModal("/video/"); // replace with your URL
        modal.style.display = "block";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    body.style.overflow = "auto";
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

        fetchPageAndDisplayInModal("/video/");
        modal.style.display = "block";
    }
});

observer.observe(document.getElementById('modalBody'), { childList: true });
