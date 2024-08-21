const initSlider = () => {
    const imageList = document.querySelector(".sliding-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".sliding-wrapper .slide-button");
    

    //Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});

        });
    });
}

window.addEventListener("load", initSlider);

