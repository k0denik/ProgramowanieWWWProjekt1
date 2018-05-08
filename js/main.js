let ui = {
    hide: function() {
        $("#menu-container").addClass("hidden");
        $("#button-show-container button").addClass("show");
    },
    show: function () {
        $("#menu-container").removeClass("hidden");
        $("#button-show-container button").removeClass("show");
    }
};

$(document).ready(function () {

    //accordion buttons AJAX handling
    $("#accordion .btn").click(function () {
        $("#content").load(this.dataset.url);
    });

    $("#content").load("subpages/about.html");

    $("#button-hide-container button").click(ui.hide);
    $("#button-show-container button").click(ui.show);
});