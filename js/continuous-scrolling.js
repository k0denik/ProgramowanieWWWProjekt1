$(document).ready(function () {

    //code based on codepen Infinite Scroll (pure JS) by Werner Beroux: codepen.io/wernight/details/YyvNoW

    let gallery = document.querySelector("#gallery");

    let galleryPageLength = 3;
    let currentPictureIndex = 1;
    // alternative approach
    let imageCount = 13;

    // usual approach
    // function urlExists(index) {
    //     var http = new XMLHttpRequest();
    //     http.open('HEAD', `img/gallery/image${index}.jpg`, false);
    //     http.send();
    //     return http.status != 404;
    // }

    let loadMore = function () {
        for (let i = 0; i < galleryPageLength && currentPictureIndex <= imageCount; i++) {
            let picture = document.createElement("img");
            picture.setAttribute("src", `img/gallery/image${currentPictureIndex}.jpg`);
            picture.setAttribute("alt", `dynamically loaded picture no ${currentPictureIndex}`);
            gallery.appendChild(picture);

            //let description = document.createElement("div")
            currentPictureIndex += 1;
        }
    };
    loadMore();

    gallery.addEventListener("scroll", function () {
        if (gallery.scrollTop + gallery.clientHeight > (0.95 * gallery.scrollHeight)) {
            loadMore();
        }
    });
});