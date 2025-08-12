let imageIndex = 0;
showImage();
function showImage () {
    let slideshowImage = document.getElementsByTagName("picture");
    for (let i = 0; i < slideshowImage.length; i++) {
        slideshowImage[i].style.display = "none";
    }
    imageIndex++;
    if(imageIndex > slideshowImage.length)  {
        imageIndex = 1;
    }
    slideshowImage[imageIndex - 1].style.display = "block";
    setTimeout(showImage, 2000);
}

function redirectToMenuPage() {
	window.location.href = "menu.html";
}

function redirectToCollectionPage() {
	window.location.href = "collection.html";
}


function checkOrientation() {
                const warning = document.getElementById("orientation-warning");
                const content = document.getElementById("main-content");
                if (window.innerWidth < 750) {
                        if (window.innerWidth > window.innerHeight) {
                        // Landscape
                        warning.style.display = "block";
                        content.style.display = "none";
                    } else {
                        // Portrait
                        warning.style.display = "none";
                        content.style.display = "block";
                    }
                }
            }

            window.addEventListener("resize", checkOrientation);
            window.addEventListener("orientationchange", checkOrientation);