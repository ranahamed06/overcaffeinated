sessionStorage.setItem("cameFromIndex3", "true");

    const title = document.getElementById("animated-cafe-name");
    const letters = ['O','v','e','r','C','a','f','f','e','i','n','a','t','e','d'];
    letters.forEach((char, index) => {
        let newLetter = document.createElement('span');
        newLetter.textContent = char;
        newLetter.style.animationDelay = `${index * 0.15}s`;
        title.appendChild(newLetter);
    });

    const delayPerLetter = 150;
    const totalDelay = letters.length * delayPerLetter + 1000;

    window.onload = function () {
        setTimeout(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const orientation = width > height ? "landscape" : "portrait";

            if (width <= 430) {
                window.location.href = "index2.html";
            } else if (width >= 750){
                window.location.href = "index1.html";
            } 
        }, totalDelay);
    };