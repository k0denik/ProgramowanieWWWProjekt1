$(document).ready(function () {
    ui.hide();

    //code based on https://www.devstreak.com/parallax-scrolling-effect-with-pure-javascript/

    let parallax = $(".parallax")[0];
    let heading = $("#content > section > h1");

    window.addEventListener("scroll", function () {
        let scrolledHeight = window.pageYOffset;
        parallax.style.backgroundPositionY = -(scrolledHeight / 1.5) + "px";
        heading.css("color", `rgba(255,255,255,${(300 - Math.min(scrolledHeight, 300)) / 300}`);
        heading.css("background", `rgba(20,20,20,${0.3 - Math.min((0.3 * scrolledHeight) / 300, 0.3)}`);
        heading.css("background-clip", "content-box");
    });
});
