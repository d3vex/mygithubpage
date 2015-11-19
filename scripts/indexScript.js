clearMenu = function () {
    document.getElementById("menu_home").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    document.getElementById("menu_about").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    document.getElementById("menu_portfolio").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
    document.getElementById("menu_cv").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase";
};
loadHome = function () {
    clearMenu();
    document.getElementById("menu_home").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - Home";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/home.html");
        jQuery("#content").fadeIn(100);
    });
};
loadAbout = function () {
    clearMenu();
    document.getElementById("menu_about").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - About";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/about.html");
        jQuery("#content").fadeIn(200);
    });
};
loadPortfolio = function () {
    clearMenu();
    document.getElementById("menu_portfolio").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - Portfolio";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/portfolio.html");
        jQuery("#content").fadeIn(200);
    });
};
loadCV = function () {
    clearMenu();
    document.getElementById("menu_cv").className = "main-menubar-item mdl-navigation__link mdl-typography--text-uppercase menu-item-active";
    document.title = "Sebastian De Ro - CV";
    jQuery("#content").fadeOut(100, function () {
        document.getElementById("content").innerHTML = "";
        jQuery("#content").load("documents/cv.html");
        jQuery("#content").fadeIn(200);
    });
};

$("document").ready(function () {

    if (window.location.hash == "#home") {
        loadHome();
    } else if (window.location.hash == "#about") {
        loadAbout();
    } else if (window.location.hash == "#portfolio") {
        loadPortfolio();
    } else if (window.location.hash == "#cv"){
        loadCV();
    } else if (window.location.hash == ""){
        loadHome();
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