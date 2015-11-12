clearMenu = function () {
    document.getElementById("menu_home").className = "";
    document.getElementById("menu_about").className = "";
    document.getElementById("menu_portfolio").className = "";
    document.getElementById("menu_cv").className = "";
};
loadHome = function () {
    clearMenu();
    document.getElementById("menu_home").className = "active";
    document.title = "Sebastian De Ro - Home";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/home.html");
        jQuery("#content").fadeIn(100);
    });
};
loadAbout = function () {
    clearMenu();
    document.getElementById("menu_about").className = "active";
    document.title = "Sebastian De Ro - About";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/about.html");
        jQuery("#content").fadeIn(100);
    });
};
loadPortfolio = function () {
    clearMenu();
    document.getElementById("menu_portfolio").className = "active";
    document.title = "Sebastian De Ro - Portfolio";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/portfolio.html");
        jQuery("#content").fadeIn(100);
    });
};
loadCV = function () {
    clearMenu();
    document.getElementById("menu_cv").className = "active";
    document.title = "Sebastian De Ro - CV";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/cv.html");
        jQuery("#content").fadeIn(100);
    });
};

$("document").ready(function () {


    if (window.location.hash == "#home") {
        loadHome();
    } else if (window.location.hash == "#about") {
        loadAbout();
    } else if (window.location.hash == "#portfolio") {
        loadPortfolio();
    } else {
        loadCV();
    }
    
    $("#menu_home").on("click", function () {
        loadHome();
    });
    $("#menu_about").on("click", function () {
        loadAbout();
    });
    $("#menu_portfolio").on("click", function () {
        loadPortfolio();
    });
    $("#menu_cv").on("click", function () {
        loadCV();
    });
});