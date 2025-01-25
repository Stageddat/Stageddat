function updateBackground() {
    const mainBg = document.getElementById("main-bg");

    if (!mainBg) {
        console.error("Element with id 'main-bg' not found.");
        return;
    }

    const hour = new Date().getHours();

    let imageUrl = "";
    if (hour >= 6 && hour < 12) {
        imageUrl = "backgroundImage/day.webp";
    } else if (hour >= 12 && hour < 18) {
        imageUrl = "backgroundImage/afternoon.webp";
    } else {
        imageUrl = "backgroundImage/night.webp";
    }

    mainBg.style.backgroundImage = `url('${imageUrl}')`;
    mainBg.style.backgroundSize = "cover";
    mainBg.style.backgroundPosition = "center";
}

updateBackground();
setInterval(updateBackground, 60000);