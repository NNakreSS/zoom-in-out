document.addEventListener('DOMContentLoaded', function () {
    const zoomableImage = new Zoomed("img/map.jpg", "600px", "600px", "zoomed-image-container", true);
    const [container, img_container, img, zoomInButton, zoomOutButton] = zoomableImage.getElements();
    zoomInButton.className = "zoomed-button";
    zoomOutButton.className = "zoomed-button";
    document.getElementById("zoomed-container").appendChild(container);
});

