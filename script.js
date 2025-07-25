let imageIndex = 0;
showImage();
function showImage () {
    let slideshowImage = document.getElementsByClassName("images");
    for (let i = 0; i < slideshowImage.length; i++) {
        slideshowImage[i].style.display = "none";
    }
    imageIndex++;
    if(imageIndex > slideshowImage.length)  {
        imageIndex = 1;
    }
    slideshowImage[imageIndex - 1].style.display = "block";
    setTimeout(showImage, 3000);
}

function redirectToMenuPage() {
	window.location.href = "menu.html";
}

function redirectToCollectionPage() {
	window.location.href = "collection.html";
}

const fromIndex3 = sessionStorage.getItem("cameFromIndex3");

if (!fromIndex3) {
    window.location.href = "index.html";
} else {
    sessionStorage.removeItem("cameFromIndex3");
}